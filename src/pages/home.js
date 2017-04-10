import React from 'react';
import Container from '../components/common/Container';
import { TextCenter } from '../components/helpers/TextAlign';
import Slider from '../components/common/Slider';

const HomePage = () => (
  <div>
    <Slider />
    <Container>
      <TextCenter>showing <a href="#">popular movies</a> released <a href="#">this week</a></TextCenter>
    </Container>
  </div>
);

export default HomePage;
