import React from "react";
import LandingPage from "./landingPage.js";
import {shallow} from "enzyme";
import store from '../store';
import { Provider } from "react-redux";

it('Renders without crashing', () => {
    shallow(
        <Provider store={store} >
            <LandingPage />
        </Provider>
    );
});