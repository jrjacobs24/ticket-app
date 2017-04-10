import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Header, Container } from './components/common';
import HomePage from './components/home/HomePage';
import MoviesPage from './pages/movies';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies" component={MoviesPage} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
