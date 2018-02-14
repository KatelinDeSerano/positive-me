import React, { Component } from 'react';

import './App.css';

import Nav from './nav.js';
import JournalForm from './journalForm.js';
import LandingPage from './landingPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <JournalForm />
        <LandingPage />
      </div>
    );
  }
}

export default App;

