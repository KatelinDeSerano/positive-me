import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';
import {connect} from "react-redux";
import './App.css';
import LandingPage from './landingPage.js';
import JournalHistory from './journalHistory.js';
import Nav from './nav.js';
import Dashboard from './dashboard.js';
import RegistrationPage from './registrationPage.js';
import LoginPage from './loginPage.js';

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn && !this.props.loggedIn) {
          // When we are logged in, refresh the auth token periodically
          this.startPeriodicRefresh();
      } else if (!nextProps.loggedIn && this.props.loggedIn) {
          // Stop refreshing when we log out
          this.stopPeriodicRefresh();
      }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

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

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(App);


