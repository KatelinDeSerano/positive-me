import React from "react";
import Nav from "./nav.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<Nav />);
})