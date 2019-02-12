import { FETCH_WORDS, RESET_WORD_STATE } from '../actions/types';

const INITIAL_STATE = {
  apiData: [],
  apiLoaded: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        apiData: action.payload,
        apiLoaded: true
      }
    case RESET_WORD_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
