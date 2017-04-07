import { connect } from 'react-redux';
import MovieList from './';

const mapStateToProps = (store) => {
  return {
    movies: store.movies
  };
}

const VisibleMovieList = connect(mapStateToProps)(MovieList);

export default VisibleMovieList;