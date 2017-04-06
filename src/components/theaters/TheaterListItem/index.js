import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const TheaterListItem = () => {
  const theaterAddress = 'Street Address, City, State Zip Code';
  return(
    <Card>
      <CardTitle title="Theater Name" subtitle={theaterAddress} />
      <CardText>
          <RaisedButton label="Default" />
      </CardText>
    </Card>
  );
};

export default TheaterListItem;
