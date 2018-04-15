import {API_BASE_URL} from '../config.js';
import {normalizeResponseErrors} from './utils';

export const SET_EMOJI_VALUE_1 = "SET_EMOJI_VALUE_1";
export const setEmojiValue1 = (value) => {
  return {
    type: SET_EMOJI_VALUE_1,
    value
  }
}

export const SET_EMOJI_VALUE_2 = "SET_EMOJI_VALUE_2";
export const setEmojiValue2 = (value) => {
  return {
    type: SET_EMOJI_VALUE_2,
    value
  }
}

export const POST_JOURNAL_ENTRY_SUCCESS = "POST_JOURNAL_ENTRY_SUCCESS";
export const postJournalEntrySuccess = (data) => {
  return {
    type: POST_JOURNAL_ENTRY_SUCCESS, 
    data
  }
}

export const POST_JOURNAL_ENTRY_ERROR = "POST_JOURNAL_ENTRY_ERROR";
export const postJournalEntryError = (error) => {
  return {
    type: POST_JOURNAL_ENTRY_ERROR, 
    error
  }
}

export const postJournalEntry = (journalEntry) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/positive-me`, {
      method: 'POST',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`, 
          "Content-Type": 'application/json'
      },
      body: JSON.stringify(journalEntry)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postJournalEntrySuccess(data)))
    .catch(err => dispatch(postJournalEntryError(err)))
};

export const FETCH_JOURNAL_SUCCESS = "FETCH_JOURNAL_SUCCESS";
export const fetchJournalSuccess = (data) => {
  return {
    type: FETCH_JOURNAL_SUCCESS, 
    data
  }
}

export const FETCH_JOURNAL_ERROR = "FETCH_JOURNAL_ERROR";
export const fetchJournalError = (error) => {
  return {
    type: FETCH_JOURNAL_ERROR, 
    error
  }
}

export const fetchJournal = (user) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/positive-me/${user}`, {
      method: 'GET',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`, 
          "Content-Type": 'application/json'
      }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchJournalSuccess(data)))
    .catch(err => dispatch(fetchJournalError(err)))
};

export const deleteEntry = (id, user) => (dispatch, getState) => {
  console.log('action triggered. Entry index:' + id);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/positive-me/${id}`, {
      method: 'DELETE',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`
      }
  })
  .then(res => dispatch(deleteJournalSuccess(id, user)))
};

export const DELETE_JOURNAL_SUCCESS = "DELETE_JOURNAL_SUCCESS";
export const deleteJournalSuccess = (id, user) => {
  return {
    type: DELETE_JOURNAL_SUCCESS
  }
}

export const DELETE_JOURNAL_ERROR = "DELETE_JOURNAL_ERROR";
export const deleteJournalError = (error) => {
  return {
    type: DELETE_JOURNAL_ERROR, 
    error
  }
}