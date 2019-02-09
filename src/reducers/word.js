import { FETCH_WORDS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return action.payload;
    default:
      return state;
  }
};