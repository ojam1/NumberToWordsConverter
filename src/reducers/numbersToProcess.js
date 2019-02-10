import { SAVE_NUMBERS } from '../actions/types';

const INITIAL_STATE = {
  numbers: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_NUMBERS:
      return { ...state, numbers: action.payload };
    default:
      return state;
  }
};