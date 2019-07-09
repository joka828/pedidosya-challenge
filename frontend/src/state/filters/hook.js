import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

import reducer, { initialState } from './reducer';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  SET_STATE,
} from './constants';

import { shops as shopsService } from '../../services';

export const StoreContext = createContext({});

export const FiltersContext = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const loadConfig = (value) => {
    dispatch({
      type: LOAD,
    });

    shopsService.getFilters(value)
      .then((response) => {
        dispatch({
          type: LOAD_SUCCESS,
          config: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOAD_FAIL,
        });
        console.error(err);
      });
  };

  const setState = (changedFilter) => {
    const changedIndex = data.state.findIndex(filter => filter.name === changedFilter.name);
    const filters = [...data.state];
    filters[changedIndex].value = changedFilter.value;

    dispatch({
      type: SET_STATE,
      state: filters,
    });
  };


  return (
    <StoreContext.Provider
      value={[
        data,
        {
          loadConfig,
          setState,
        },
      ]}
    >
      {children}
    </StoreContext.Provider>
  );
};

FiltersContext.propTypes = {
  children: PropTypes.node.isRequired,
};

const useFilters = () => useContext(StoreContext);

export default useFilters;
