import React, { Component } from 'react';

import './App.css';
import Chart from './chart.js';

import LandingPage from './landingPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Chart />
      </div>
    );
  }
}

export default App;

