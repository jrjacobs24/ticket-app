import React from 'react';
// import { connect } from 'react-redux';
import store from '../../../store';
import axios from 'axios';
import { getMoviesSuccess } from '../../../actions/actionCreators';
import VisibleMoviesList from '../MoviesList/VisibleMovieList';
import Button from 'react-bootstrap/lib/Button';

const MoviesView = (props) => {

  const getMovies = () => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=244f0e42b58da27a1a252ded03c528f7&language=en-US&query=Star%20Wars&page=1&include_adult=false')
      .then(resp => {
        console.log(resp);
        store.dispatch(getMoviesSuccess(resp.data));
        return resp;
      });
  }

  return(
      <div>
        <h1>This is the Movies Page</h1>
        <Button btStyle="primary" onClick={() => getMovies()}>Get Movies</Button>
        <VisibleMoviesList />
      </div>
  );
};

export default MoviesView;
