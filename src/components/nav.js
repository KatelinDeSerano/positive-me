import React from "react";
import './nav.css';
import { Link, Redirect } from 'react-router-dom';
import { clearAuth } from "../actions/auth";
import { connect } from "react-redux";

export class Nav extends React.Component {
    logout() {
        this.props.dispatch(clearAuth());
    }
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <ul className="nav">
                    <li><Link to="/dashboard">PositiveMe</ Link></li>
                    <li><Link to="/journal_history">Journal History</ Link></li>
                    <li className="logout" onClick={() => this.logout()}>Log Out</li>
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Nav);
