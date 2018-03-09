import {SET_EMOJI_VALUE} from '../actions/positive.js';

const initialState = {
    currentUser: null,
    emojiValue: 0,
    journal: [
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: -2,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 2,
        date: "1/1/2018"
      },
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: -1,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 1,
        date: "1/2/2018"
      },
      {
        negativeThought: "I'm terrible at this.",
        negativeFeeling: -2,
        negativeEvidence: "It's terrible.",
        alternativeEvidence: "It's not really terrible, it works.",
        positiveThought: "I can improve on this,  I can practice and get better.",
        positiveFeeling: 0,
        date: "1/3/2018"
      }
    ]
};

export const positiveReducer = (state=initialState, action) => {
  if (action.type === SET_EMOJI_VALUE) {
    return Object.assign({}, state, {emojiValue: action.value})
  }

  return state;
}

 