import {SET_EMOJI_VALUE_1} from '../actions/positive.js';
import {SET_EMOJI_VALUE_2} from '../actions/positive.js';

const initialState = {
    currentUser: null,
    emojiValue1: 0,
    emojiValue2: 0,
    journal: [
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: 1,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 4,
        date: "1/1/2018"
      },
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: 2,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 5,
        date: "1/2/2018"
      },
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: 2,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 4,
        date: "1/3/2018"
      }
    ]
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE_1) {
    return Object.assign({}, state, {emojiValue1: action.value})
  }
  if (action.type === SET_EMOJI_VALUE_2) {
    return Object.assign({}, state, {emojiValue2: action.value})
  }

  return state;
}

 