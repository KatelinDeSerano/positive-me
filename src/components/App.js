import React, { Component } from 'react';

import './App.css';
import Textbox from './textbox.js';
import Nav from './nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Textbox label="Negative Thought"/>
      </div>
    );
  }
}

export default App;
