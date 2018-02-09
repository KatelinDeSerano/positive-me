import React, { Component } from 'react';

import './landingPage.css';

import LoginForm from './loginForm.js';



class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Postive Me</h1>
        <p>Lorum Ipsum Blah blah blah</p>
        <LoginForm />
        <Link to="/register">Register </Link>
      </div>
    );
  }
}

export default LandingPage;