import {SET_EMOJI_VALUE_1, POST_JOURNAL_ENTRY_SUCCESS, TOGGLE_ENTRY_SELECTED} from '../actions/positive.js';
import {POST_JOURNAL_ENTRY_ERROR} from '../actions/positive.js';
import {SET_EMOJI_VALUE_2} from '../actions/positive.js';
import {FETCH_JOURNAL_ERROR} from '../actions/positive.js';
import {FETCH_JOURNAL_SUCCESS} from '../actions/positive.js';
import {DELETE_JOURNAL_ERROR} from '../actions/positive.js';
import {DELETE_JOURNAL_SUCCESS} from '../actions/positive.js';
import {LOAD_CURRENT_JOURNAL_ENTRY} from '../actions/positive.js';
import {EDIT_JOURNAL_ENTRY_SUCCESS} from '../actions/positive.js';
import {EDIT_JOURNAL_ENTRY_ERROR} from '../actions/positive.js';
import {LOAD} from '../actions/positive.js';

const initialState = {
    currentUser: null,
    emojiValue1: 0,
    emojiValue2: 0,
    journal: [],
    error: null,
    currentJournalEntry: {},
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE_1) {
    return Object.assign({}, state, {emojiValue1: action.value})
  }
  if (action.type === SET_EMOJI_VALUE_2) {
    return Object.assign({}, state, {emojiValue2: action.value})
  }
  if (action.type === POST_JOURNAL_ENTRY_SUCCESS) {
    return Object.assign({}, state, { 
      emojiValue1: 0, 
      emojiValue2: 0, 
      journal:[...state.journal, action.data] 
    })
  }
  if (action.type === POST_JOURNAL_ENTRY_ERROR) {
    return Object.assign({}, state, {
      emojiValue1: 0, 
      emojiValue2: 0,
      error: action.error
    })
  }
  if (action.type === FETCH_JOURNAL_ERROR) {
    return Object.assign({}, state, {error: action.error})
  }
  if (action.type === FETCH_JOURNAL_SUCCESS) {
    return Object.assign({}, state, {journal: action.data})
  }
  if (action.type === DELETE_JOURNAL_ERROR) {
    return Object.assign({}, state, {error: action.error})
  }
  if (action.type === DELETE_JOURNAL_SUCCESS) {
    return Object.assign({}, state, {journal: action.data});
  }
  if (action.type === TOGGLE_ENTRY_SELECTED) {
    return Object.assign({}, state, {journal: action.data});
  }
  if (action.type === EDIT_JOURNAL_ENTRY_ERROR) {
    return Object.assign({}, state, {journal: action.error});
  }
  if (action.type === EDIT_JOURNAL_ENTRY_SUCCESS) {
    return Object.assign({}, state, {journal: action.data});
  }
  if (action.type === LOAD_CURRENT_JOURNAL_ENTRY) {
    return Object.assign({}, state, {currentJournalEntry: action.data});
  }
  if (action.type === LOAD) {
    return Object.assign({}, state, {data: action.data});
  }
  return state;
}

 

