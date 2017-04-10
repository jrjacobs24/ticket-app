import * as types from './action-types';

export function getMoviesSuccess(movies) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movies
  };
}
