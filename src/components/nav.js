import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ul className="nav">
                <li><Link to="/:username">PositiveMe</ Link></li>
                <li><Link to="/:username/journal_history">Journal History</ Link></li>
                <li className="logout"> Log Out</li>
            </ul>
        </div>
    );
};

// TODO: add links to nav bar