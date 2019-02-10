import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import MainPage from '../components/mainPage';
import WordList from '../components/wordList';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/words' component={WordList} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
