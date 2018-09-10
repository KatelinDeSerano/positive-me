
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import store from '../store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
