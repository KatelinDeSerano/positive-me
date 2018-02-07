import React from "react";
import EmotionScale from "./emotionScale.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<EmotionScale />);
});