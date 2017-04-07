import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const MoviesListItem = ({ movie }) => {
  return(
    <Card>
      <CardTitle title={movie.original_title} />
      <CardText>
        <div>{movie.overview}</div>
        <RaisedButton label="Default" />
      </CardText>
    </Card>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object
};

export default MoviesListItem;
