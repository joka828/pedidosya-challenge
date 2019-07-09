/* eslint-disable no-param-reassign */
import produce from 'immer';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './constants';

export const initialState = { shops: [], loading: false };

const reducer = (state, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD:
      draft.loading = true;
      break;

    case LOAD_SUCCESS:
      draft.shops = action.shops;
      draft.loading = false;
      break;

    case LOAD_FAIL:
      draft.loading = false;
      break;

    default:
      throw new Error('No action type in shopslist context');
  }
});

export default reducer;
