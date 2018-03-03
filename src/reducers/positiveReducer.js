import {SET_EMOJI_VALUE} from '../actions/positive.js';

const initialState = {
    currentUser: null,
    emojiValue: 0,
    journal: [
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: "Sad",
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: "Happy",
        date: "1/1/2018"
      }
    ]
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE) {
    return Object.assign({}, state, {emojiValue: action.value})
  }

  return state;
}

 