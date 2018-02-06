import React from "react";
import './nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><a href="#">PositiveMe</a></li>
                <li><a href="#">Journal History</a></li>
                <li className="logout" ><a href="#">Log Out</a></li>
            </ul>
        </div>
    );
};