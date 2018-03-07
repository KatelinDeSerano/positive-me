import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';
import { clearAuth } from "../actions/auth";
import {connect} from "react-redux";

export class Nav extends React.Component {
    logout() {
        this.props.dispatch(clearAuth());
    }
    render() {
      return (
        <div>
            <ul className="nav">
                <li><Link to="/dashboard">PositiveMe</ Link></li>
                <li><Link to="/journal_history">Journal History</ Link></li>
                <li className="logout" onClick={() => this.logout()}> Log Out</li>
            </ul>
        </div>
      );
    }
};

export default connect()(Nav);
