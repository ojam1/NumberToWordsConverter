import { SAVE_NUMBERS } from './types';

export const storeNumbers = numbers => dispatch => {
  dispatch({
    type: SAVE_NUMBERS,
    payload: numbers
  });
};