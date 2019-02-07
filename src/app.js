import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './components/MainPage';

const jsx = (
  <div>
    <h1>
      Number To Word Converter
    </h1>
    <MainPage />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));