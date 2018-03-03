import React, { Component } from 'react';

import './App.css';
import Chart from './chart.js';
import JournalForm from './journalForm.js';
import LandingPage from './landingPage.js';
import JournalListView from './journalListView.js';
import JournalDetail from './journalDetail.js';
import Nav from './nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <Chart />
        <JournalForm />
        <JournalListView />
        <JournalDetail />
      </div>
    );
  }
}

export default App;

