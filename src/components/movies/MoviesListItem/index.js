import React, { PropTypes } from 'react';
import {
  Card,
  CardTitle,
  CardBlock,
  CardLink
} from './../../common/Card';

const MoviesListItem = ({ movie }) => {
  return(
    <Card>
      <CardBlock>
        <CardTitle>{movie.original_title}</CardTitle>
        <p>{movie.overview}</p>
        <CardLink href="#">More Info</CardLink>
        <CardLink href="#">View Related</CardLink>
      </CardBlock>
    </Card>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object
};

export default MoviesListItem;
