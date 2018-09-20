import { API_BASE_URL } from '../config.js';
import { normalizeResponseErrors } from './utils';


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

export const LOAD_CURRENT_JOURNAL_ENTRY = "LOAD_CURRENT_JOURNAL_ENTRY";
export const loadCurrentJournalEntry = (data) => {
  return {
    type: LOAD_CURRENT_JOURNAL_ENTRY,
    data
  }
}

export const EDIT_JOURNAL_ENTRY_SUCCESS = "EDIT_JOURNAL_ENTRY_SUCCESS";
export const editJournalEntrySuccess = (data) => {
  return {
    type: EDIT_JOURNAL_ENTRY_SUCCESS,
    data
  }
}

export const EDIT_JOURNAL_ENTRY_ERROR = "EDIT_JOURNAL_ENTRY_ERROR";
export const editJournalEntryError = (error) => {
  return {
    type: EDIT_JOURNAL_ENTRY_ERROR,
    error
  }
}

export const editJournalEntry = (id, journalEntry) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/positive-me/${id}`, {
    method: 'PUT',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(journalEntry)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(editJournalEntrySuccess(id, data)))
    .catch(err => dispatch(editJournalEntryError(err)))
};



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
    .catch(err => {
      dispatch(postJournalEntryError(err))
    })
};

export const FETCH_JOURNAL_SUCCESS = "FETCH_JOURNAL_SUCCESS";
export const fetchJournalSuccess = (data) => {
  data.map(entry => {
    entry.selected = false;
    return entry;
  })
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

export const deleteEntry = (id, data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/positive-me/${id}`, {
    method: 'DELETE',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => dispatch(deleteJournalSuccess(id, data)))
};

export const DELETE_JOURNAL_SUCCESS = "DELETE_JOURNAL_SUCCESS";
export const deleteJournalSuccess = (id, data) => {
  return {
    type: DELETE_JOURNAL_SUCCESS,
    data
  }
}

export const DELETE_JOURNAL_ERROR = "DELETE_JOURNAL_ERROR";
export const deleteJournalError = (error) => {
  return {
    type: DELETE_JOURNAL_ERROR,
    error
  }
}

export const TOGGLE_ENTRY_SELECTED = "TOGGLE_ENTRY_SELECTED";
export const toggleEntrySelected = (data) => {
  return {
    type: TOGGLE_ENTRY_SELECTED,
    data
  }
}

export const LOAD = "LOAD";
export const load = data => ({
  type: LOAD,
  data
});



