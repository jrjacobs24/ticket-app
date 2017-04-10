import { handleActions } from 'redux-actions';
import { searchRequest, searchResponse, searchError } from '../actions/movies';

export default handleActions({
  searchRequest: (state, { payload }) => ({
    ...state,
    isSearching: true,
    searchUrl: payload,
  }),

  searchResponse: (state, { payload }) => ({
    ...state,
    isSearching: false,
    results: payload.movies,
  }),

  searchError: (state, { payload }) => ({
    ...state,
    isSearching: false,
    results: [],
    error: payload,
  })
}, {
  isSearching: false,
  searchUrl: '',
  error: {},
  results: [],
});
