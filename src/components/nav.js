import React from "react";
import './nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                
                <li>PositiveMe</li>
                <li>Journal History</li>
                <li className="logout" >Log Out</li>
            </ul>
        </div>
    );
};

// TODO: add links to nav bar