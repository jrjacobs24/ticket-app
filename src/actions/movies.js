import { createAction } from 'redux-actions';
import axios from 'axios';
import querystring from 'querystring';

export const searchRequest = createAction('MOVIE_SEARCH_REQUEST');
export const searchResponse = createAction('MOVIE_SEARCH_RESPONSE', resp => resp.data);
export const searchError = createAction('MOVIE_SEARCH_ERROR');

export const searchMovies = () => (dispatch, getState) => {
  // This is how you would pull the search from state
  // const { search } = getState();
  const pars = {
    api_key: '244f0e42b58da27a1a252ded03c528f',
    language: 'en-US',
    query: 'Star%20Wars',
    page: 1,
    include_adult: false,
  };
  const url = `https://api.themoviedb.org/3/search/movie?${querystring.stringify(pars)}`;
  searchRequest(url);
  return axios.get(url).then(searchResponse, searchError);
};
