import React from "react";
import './textbox.css';

export default function Textbox(props) {
    return (
        <div className="textbox">
            <label>{props.label}</label>
            <textarea rows="4" required=""></textarea>
        </div>
    );
};