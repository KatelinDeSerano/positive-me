import React from "react";
import EmojiScale2 from "./emojiScale2.js";
import { shallow } from "enzyme";
import store from '../store';
import { Provider } from "react-redux";

it('Renders without crashing', () => {
    shallow(
        <Provider store={store} >
            <EmojiScale2 />
        </Provider>
    );
});