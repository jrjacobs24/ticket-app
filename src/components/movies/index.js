import React from 'react';
import Movies from './MoviesList';
import Button from 'react-bootstrap/lib/Button';

const MoviesView = ({ movies, searchMovies }) => (
  <div>
    <h1>This is the Movies Page</h1>
    <Button btStyle="primary" onClick={searchMovies}>Get Movies</Button>
    <Movies movies={movies} />
  </div>
);

export default MoviesView;
