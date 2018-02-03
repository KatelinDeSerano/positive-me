import React from "react";
import Textbox from "./textbox.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<Textbox />);
});