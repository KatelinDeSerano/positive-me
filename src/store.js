import {createStore, applyMiddleware, compose, combineReducers} from 'redux'; 
import {positiveReducer} from './reducers/positiveReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    positiveReducer,
    form: formReducer,
    auth: authReducer,
  })

export default createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk)));