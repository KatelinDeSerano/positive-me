import {SET_EMOJI_VALUE} from '../actions/positive.js';
//import {connect} from 'react-redux';

const initialState = {
    currentUser: null,
    emojiValue: 0,
    journal: [
      {
        text: "I like turtles"
      }
    ]
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE) {
    return Object.assign({}, state, {emojiValue: action.value})
  }

  return state;
}