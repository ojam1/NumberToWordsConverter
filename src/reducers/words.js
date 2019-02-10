import { FETCH_WORDS, RESET_WORD_STATE } from '../actions/types';

const INITIAL_STATE = ["initial_state"];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return action.payload;
    case RESET_WORD_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};