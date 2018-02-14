import {} from '../actions/positive.js';
//import {connect} from 'react-redux';

const initialState = {
    currentUser: null,
    journal: [
      {
        text: "I love turtles"
      }
    ]
};

export const positiveReducer = (state=initialState, action) => {
// if (action.type === FETCH_DATA) {
//  return Object.assign({}, state, {data: action.data})
//}

  return state;
}