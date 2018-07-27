import React from 'react';
import EmojiScale1 from './emojiScale1.js';
import {shallow} from "enzyme";
import store from '../store';
import { Provider } from 'react-redux';

it('Renders without crashing', () => {
    shallow(
    <Provider store={store} >
    <EmojiScale1 />
    </Provider>
    );
});