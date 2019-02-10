import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './router/appRouter';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <h1 className='display-2 text-center shadow p-3 mb-5 bg-white rounded'>
        Number To Word Converter
      </h1>
      <AppRouter />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
