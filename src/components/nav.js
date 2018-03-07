import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ul className="nav">
                <li><Link to="/dashboard">PositiveMe</ Link></li>
                <li><Link to="/journal_history">Journal History</ Link></li>
                <li className="logout"> Log Out</li>
            </ul>
        </div>
    );
};
