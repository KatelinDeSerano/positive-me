import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './loginForm.js';
// TO DO: add handle error for login

export function LoginPage(props) {
    // If we are logged in (which happens automatically when Login
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        
        <div className="home">
            <h2>Login</h2>
            <LoginForm />
            <Link to="/register" className="auth">Register</Link>
        </div>
        
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);