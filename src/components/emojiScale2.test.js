import React from "react";
import EmojiScale2 from "./emojiScale2.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<EmojiScale2 />);
});