import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store'; 
import App from './App';
import './index.css';

const store = createStore({
  movies: {
    results: []
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/*
import { getSomeData } = './services/myData';

getSomeData(blah).then(results => {
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
*/
