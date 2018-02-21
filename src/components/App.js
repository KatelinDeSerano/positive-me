import React, { Component } from 'react';

import './App.css';
import Chart from './chart.js';
import JournalForm from './journalForm.js';
import LandingPage from './landingPage.js';
import MinJournalView from './minJournalView.js';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Chart />
        <JournalForm />
        <MinJournalView />
      </div>
    );
  }
}

export default App;

