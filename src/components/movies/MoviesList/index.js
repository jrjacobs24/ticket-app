import React, { PropTypes } from 'react';
import MoviesListItem from './../MoviesListItem';

const MoviesList = (props) => {
  let movies = []
  if(props.movies) {
    movies = props.movies.results.map(movie => (
      <MoviesListItem key={movie.id} movie={movie} />
    ));
  }

  return(
    <div>
      { movies ? movies : "No Movies Available" }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.object
};

export default MoviesList;
