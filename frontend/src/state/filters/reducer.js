/* eslint-disable no-param-reassign */
import produce from 'immer';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  SET_STATE,
} from './constants';

export const initialState = { config: [], state: [], loading: false };

const reducer = (state, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD:
      draft.loading = true;
      break;
    case LOAD_SUCCESS:
      draft.config = [...action.config];
      draft.state = [...action.config];
      draft.loading = false;
      break;
    case LOAD_FAIL:
      draft.loading = false;
      break;

    case SET_STATE:
      draft.state = [...action.state];
      break;

    default:
      throw new Error('No action type (filters)');
  }
});

export default reducer;
