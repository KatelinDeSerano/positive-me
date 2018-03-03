import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={LandingPage} />
          <Chart />
          <Route exact path='/positive-me/:userId' component={JournalForm} />
          <JournalListView />
          <JournalDetail />
        </div>
      </Router>
    );
  }
}

export default App;

