import { handleActions } from 'redux-actions';
import { searchRequest, searchResponse, searchError } from '../actions/movies';

export default handleActions({
  [searchRequest]: (state, { payload }) => ({
    ...state,
    isSearching: true,
    searchUrl: payload,
  }),

  [searchResponse]: (state, { payload }) => ({
    ...state,
    isSearching: false,
    ...payload,
  }),

  [searchError]: (state, { payload }) => ({
    ...state,
    isSearching: false,
    results: [],
    error: payload,
  })
}, {
  page: 1,
  total_results: 0,
  total_pages: 0,
  isSearching: false,
  searchUrl: '',
  error: {},
  results: [],
});
