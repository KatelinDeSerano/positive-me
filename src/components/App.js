import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './landingPage.js';
import JournalHistory from './journalHistory.js';
import Nav from './nav.js';
import Dashboard from './dashboard.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/:username' component={Dashboard} />
          <Route exact path='/:username/journal_history' component={JournalHistory} />
        </div>
      </Router>
    );
  }
}

export default App;

