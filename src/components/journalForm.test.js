import React from "react";
import JournalForm from "./journalForm.js";
import {shallow} from "enzyme";

it('Renders without crashing', () => {
    shallow(<JournalForm />);
});