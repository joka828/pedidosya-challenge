import React, {
  createContext, useCallback, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import reducer, { initialState } from './reducer';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './constants';

import { shops as shopsService } from '../../services';

export const StoreContext = createContext({});

export const ShopsListContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const debouncedAction = useCallback(action => debounce(action, 1500));

  const load = debouncedAction((filters) => {
    dispatch({
      type: LOAD,
    });

    const serviceParams = {};
    filters.forEach((filter) => {
      serviceParams[filter.name] = filter.value;
    });

    shopsService.get(serviceParams)
      .then(({ data }) => {
        dispatch({
          type: LOAD_SUCCESS,
          shops: data.shops,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOAD_FAIL,
        });
        console.error(err);
      });
  });


  return (
    <StoreContext.Provider
      value={[
        state,
        {
          load,
        },
      ]}
    >
      {children}
    </StoreContext.Provider>
  );
};

ShopsListContext.propTypes = {
  children: PropTypes.node.isRequired,
};

const useShopsList = () => useContext(StoreContext);

export default useShopsList;
