import React, { Component } from 'react';

import './App.css';
import Textbox from './textbox.js';
import Nav from './nav.js';
import EmotionScale from './emotionScale.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Textbox label="Negative Thought"/>
        <EmotionScale />
      </div>
    );
  }
}

export default App;
