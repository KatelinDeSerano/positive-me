import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import './journalForm.css';
import Textbox from './textbox.js';
import EmotionScale from './emotionScale.js';
import Input from './input.js';

class JournalForm extends Component {
  onSubmit(values){

  }
  render() {
    return (
      <div className="form">
        <form
          className="journalForm"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values))}>
          <h1>Journal Form</h1>
          <label htmlFor="negativeThought">Negative Thought</label>
          <Field component={Input} type="text" name="negativeThought" />
          <EmotionScale />
          <label htmlFor="evidenceAgainstThought">Evidence Against Negative Thought</label>
          <Field component={Input} type="text" name="evidenceAgainstThought" />
          <label htmlFor="positiveThought">New, Positive Thought</label>
          <Field component={Input} type="text" name="positiveThought" />
          <EmotionScale />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
            >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({form: "journal"})(JournalForm);
