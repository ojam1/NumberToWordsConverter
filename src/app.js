import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './router/appRouter';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <h1 className='display-2 text-center pb-3 m-1'>
        Number To Word Converter
      </h1>
      <h1 className='display-4 text-center pb-3 m-1'>
        Convert any number to a list of words using the number pad below
      </h1>
      <AppRouter />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
