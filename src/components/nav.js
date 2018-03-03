import React from "react";
import './nav.css';

export default function Nav() {
    return (
        <div>
            <ul className="nav">
                <li>PositiveMe</li>
                <li>Journal History</li>
                <li className="logout"> Log Out</li>
            </ul>
        </div>
    );
};

// TODO: add links to nav bar