import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import createStore from './store'; 
import { getConfig } from './services/config';
import App from './App';
import './index.css';

/*const store = createStore({
  movies: {
    results: []
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);*/


axios.get(getConfig()).then(results => {
  const store = createStore({
    settings: results
  });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
