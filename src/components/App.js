import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './landingPage.js';
import JournalHistory from './journalHistory.js';
import Nav from './nav.js';
import Dashboard from './dashboard.js';
import RegistrationPage from './registrationPage.js';
import LoginPage from './loginPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegistrationPage} />
          <Route exact path='/journal_history' component={JournalHistory} />
        </div>
      </Router>
    );
  }
}

export default App;

