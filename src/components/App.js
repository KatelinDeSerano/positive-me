import React, { Component } from 'react';

import './App.css';

import Nav from './nav.js';
import JournalForm from './journalForm.js';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <JournalForm />
      </div>
    );
  }
}

export default App;
