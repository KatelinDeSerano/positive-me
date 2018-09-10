import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import EmojiScale1 from './emojiScale1.js';
import EmojiScale2 from './emojiScale2.js';
import './journalForm.css';
import Input from './input.js';
import { editJournalEntry } from '../actions/positive.js';
import { connect } from 'react-redux';
import { load as loadAccount } from '../actions/positive.js';

class InitializeFromStateForm extends Component {
  onSubmit(values) {
    values.date = Date.now();
    values.negativeFeeling = this.props.emojiValue1;
    values.positiveFeeling = this.props.emojiValue2;
    values.user = this.props.user;
    console.log(values);
    this.props.dispatch(editJournalEntry(values._id, values));
  }
  render() {

    return (
      <div className="form">
        <form
          className="journalForm"
          id="editForm"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <h1>Journal Edit Form</h1>
          <label htmlFor="negativeThought">Negative Thought</label>
          <Field component={Input} type="text" name="negativeThought" />
          <EmojiScale1 />
          <label htmlFor="evidenceAgainstThought">Evidence Against Negative Thought</label>
          <Field component={Input} type="text" name="evidenceAgainstThought" />
          <label htmlFor="positiveThought">New, Positive Thought</label>
          <Field component={Input} type="text" name="positiveThought" />
          <EmojiScale2 />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Submit
            </button>
        </form>
      </div>
    );
  };
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.positiveReducer.currentJournalEntry,
    emojiValue1: state.positiveReducer.emojiValue1,
    emojiValue2: state.positiveReducer.emojiValue2 // pull initial values from account reducer
  }),
  { load: loadAccount }, // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm;
