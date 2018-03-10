import React from "react";
import EmojiScale1 from "./emojiScale1.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<EmojiScale1 />);
});