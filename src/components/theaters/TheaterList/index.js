import React, { PropTypes } from 'react';
import TheaterListItem from './../TheaterListItem';

const TheaterList = (props) => {
  const theaterList = props.theaters.map((theater, i) => (
    <TheaterListItem key={i} />
  ));

  return(
    <div>
      {theaterList}
    </div>
  );
};

TheaterList.propTypes = {
  theaters: PropTypes.array
};

export default TheaterList;
