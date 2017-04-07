import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import MoviesView from './components/movies/Movies';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router className="App">
          <div>
            <div className="App-header">
              <Header />
            </div>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies" component={MoviesView} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
