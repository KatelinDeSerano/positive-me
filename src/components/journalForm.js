import React, { Component } from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import EmojiScale1 from './emojiScale1.js';
import EmojiScale2 from './emojiScale2.js';
import './journalForm.css';
import Input from './input.js';
import {postJournalEntry} from '../actions/positive.js';
import {connect} from 'react-redux';

class JournalForm extends Component {
  
  onSubmit(values){
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
  }
}

const mapStateToProps = state => ({
  emojiValue1: state.positiveReducer.emojiValue1,
  emojiValue2: state.positiveReducer.emojiValue2,
  user: state.auth.currentUser.username
})
// Must have emojis re-render too
const afterSubmit = (result, dispatch) => {
  dispatch(reset('journal'));
  document.getElementsByClassName("selected").className = "empty";

  // const emojiScale1 = {
  // className: 'emoji empty'
  // };
};
  

JournalForm = reduxForm({
  form: "journal",
  onSubmitSuccess: afterSubmit})(JournalForm);
JournalForm = connect(mapStateToProps)(JournalForm);
export default JournalForm;
