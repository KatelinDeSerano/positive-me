import React from 'react';
import Nav from './nav.js';
import {shallow} from "enzyme";
import store from '../store';
import { Provider } from 'react-redux';

it('Renders without crashing', () => {
    shallow(
    <Provider store={store} >
    <Nav />
    </Provider>
    );
});

// TO DO: Add more complex test