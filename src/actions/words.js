import axios from 'axios';
import { FETCH_WORDS, RESET_WORD_STATE } from './types';

const url = 'http://localhost:3000/digits';

export const allWords = numbers => dispatch => {
  axios
    .post(url, {
      numbers
    })
    .then(returnedInformation => {
      dispatch({
        type: FETCH_WORDS,
        payload: returnedInformation.data
      });
    });
};

export const resetWordState = () => dispatch => {
  dispatch({ type: RESET_WORD_STATE });
};
