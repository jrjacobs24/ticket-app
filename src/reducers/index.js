import { combineReducers } from 'redux';
import movies from './movies';
import settings from './settings';

const rootReducer = combineReducers({
  movies,
  settings,
});

export default rootReducer;
