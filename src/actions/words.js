import axios from 'axios';
import { FETCH_WORDS, RESET_WORD_STATE } from './types';

const url = 'https://number-to-word-converter-api.herokuapp.com/digits';

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
