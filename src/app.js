import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import MainPage from './components/MainPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <h1 className='display-2 text-center pb-3 m-1'>
        Number To Word Converter
      </h1>
      <h1 className='display-4 text-center pb-3 m-1'>
        Convert any number to a list of words using the number pad below... (or
        a random assignment of characters)
      </h1>
      <MainPage />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
