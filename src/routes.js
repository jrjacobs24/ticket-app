import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './App';
import HomePage from './components/home/HomePage';
import Theaters from './components/theaters/Theaters';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/theaters" component={Theaters} />
  </Route>
);
