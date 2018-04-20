import {SET_EMOJI_VALUE_1, POST_JOURNAL_ENTRY_SUCCESS} from '../actions/positive.js';
import {SET_EMOJI_VALUE_2} from '../actions/positive.js';
import {FETCH_JOURNAL_ERROR} from '../actions/positive.js';
import {FETCH_JOURNAL_SUCCESS} from '../actions/positive.js';
import {DELETE_JOURNAL_ERROR} from '../actions/positive.js';
import {DELETE_JOURNAL_SUCCESS} from '../actions/positive.js';

const initialState = {
    currentUser: null,
    emojiValue1: 0,
    emojiValue2: 0,
    journal: [],
    error: null
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE_1) {
    return Object.assign({}, state, {emojiValue1: action.value})
  }
  if (action.type === SET_EMOJI_VALUE_2) {
    return Object.assign({}, state, {emojiValue2: action.value})
  }
  if (action.type === POST_JOURNAL_ENTRY_SUCCESS) {
    return Object.assign({}, state, {emojiValue1: 0, emojiValue2: 0})
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
  return state;
}

 