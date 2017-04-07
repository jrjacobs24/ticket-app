import * as types from '../actions/action-types';

const initialState = {
  movies: {}
};

// The reducer function
function movieReducer(state = initialState, action) {

  console.log(action.type);
  console.log(types.GET_MOVIES_SUCCESS);
  switch(action.type) {

    case types.GET_MOVIES_SUCCESS:
      console.log("success");
      return Object.assign({}, state, { movies: action.movies });

    default:
      return state;

  }
}

export default movieReducer;
