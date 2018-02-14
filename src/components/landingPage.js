import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './landingPage.css';

import RegistrationForm from './registrationForm.js';



class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <h1>Some TExt Here</h1>
        <RegistrationForm />
      </div>
    );
  }
}

export default LandingPage;