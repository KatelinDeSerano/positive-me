import React, { Component } from 'react';

import './journalForm.css';
import Textbox from './textbox.js';
import EmotionScale from './emotionScale.js';

class JournalForm extends Component {
  render() {
    return (
      <div className="journalForm">
        <Textbox label="Negative Thought"/>
        <EmotionScale />
        <Textbox label="Evidence Against Negative Thought"/>
        <Textbox label="New Postive Thought"/>
        <EmotionScale />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default JournalForm;