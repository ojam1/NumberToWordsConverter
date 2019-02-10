import axios from 'axios';
import { FETCH_WORDS } from './types';

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
