import React from 'react';
import MoviesList from './MoviesList';
import Container from '../common/Container';
import Button from 'react-bootstrap/lib/Button';

const MoviesView = ({ movies, searchMovies }) => (
  <Container>
    <h1>This is the Movies Page</h1>
    <Button btStyle="primary" onClick={searchMovies}>Get Movies</Button>
    <MoviesList movies={movies} />
  </Container>
);

export default MoviesView;
