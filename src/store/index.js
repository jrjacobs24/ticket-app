import { createStore } from 'redux';
import movieReducer from '../reducers/movie-reducers';

// Create a store by passing in the reducer
const store = createStore(
  movieReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;