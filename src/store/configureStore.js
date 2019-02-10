import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import wordReducer from '../reducers/words';
import numbersToProcess from '../reducers/numbersToProcess'

export default () => {
  const store = createStore(
    combineReducers({
      word: wordReducer,
      numbersToProcess: numbersToProcess
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};
