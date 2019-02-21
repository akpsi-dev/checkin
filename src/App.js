import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Names from './component/names';
import WOTD from './component/WOTD';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Names/>
          <WOTD/>
          <p>
            AKPsi Checkin!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
