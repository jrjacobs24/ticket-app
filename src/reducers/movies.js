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
    movies: payload.movies,
  }),

  searchError: (state, { payload }) => ({
    ...state,
    isSearching: false,
    movies: {
      results: [],
    },
    error: payload,
  })
}, {
  isSearching: false,
  searchUrl: '',
  error: {},
  movies: {
    results: []
  }
});
