import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import EmojiScale1 from './emojiScale1.js';
import EmojiScale2 from './emojiScale2.js';
import './journalForm.css';
import Input from './input.js';
import { postJournalEntry } from '../actions/positive.js';
import { connect } from 'react-redux';


class JournalForm extends Component {

  onSubmit(values) {
    values.date = Date.now();
    values.emojiValue1 = this.props.emojiValue1;
    values.emojiValue2 = this.props.emojiValue2;
    values.user = this.props.user;
    console.log(values);
    this.props.dispatch(postJournalEntry(values));
  }
  render() {
    return (
      <div className="form">
        <form
          className="journalForm"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <h1>Journal Form</h1>
          <div className="field">
            <label htmlFor="negativeThought">Describe a negative thought or thoughts you had today. </label>
            <Field component={Input} type="text" name="negativeThought"
              placeholder="I had a negative thought when..." autoComplete="off" />
          </div>
          <EmojiScale1 />
          <div className="field">
            <label htmlFor="evidenceAgainstThought">Is there evidence contrary to my negative thought?</label>
            <Field component={Input} type="text" name="evidenceAgainstThought"
              placeholder="This evidence does not support my negative thought..." autoComplete="off" />
          </div>
          <div className="field">
            <label htmlFor="positiveThought">What would a positive alternative thought be in this instance?</label>
            <Field component={Input} type="text" name="positiveThought"
              placeholder="A more positive thought would be..." autoComplete="off" />
          </div>
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
  }
}

const mapStateToProps = state => ({
  emojiValue1: state.positiveReducer.emojiValue1,
  emojiValue2: state.positiveReducer.emojiValue2,
  user: state.auth.currentUser.username
})

const afterSubmit = (result, dispatch) => {
  dispatch(reset('journal'));
  alert("form has successfully been submitted!");
  document.getElementsByClassName("selected").className = "empty";
};


JournalForm = reduxForm({
  form: "journal",
  onSubmitSuccess: afterSubmit
})(JournalForm);
JournalForm = connect(mapStateToProps)(JournalForm);
export default JournalForm;
