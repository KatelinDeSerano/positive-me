import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './landingPage.css';
import {connect}  from 'react-redux';


import RegistrationForm from './registrationForm.js';

class LandingPage extends Component {
  render() {
    if (this.props.currentUser) {
      return <Redirect to={`/positive-me/{this.props.currentUser.username}`} />
    }
    return (
      <div className="landingPage">
        <div className="hero">
        <h1>Raise your positive inner voice.</h1>
          <p>We are our own toughest critics. Sometimes, that inner-voice
            becomes so negative that we feel like failures, 
            or that we will never be good enough. 
          </p>
          <p>Sound familiar? We can help.</p>
          <p>PositiveMe helps dial down that inner-critic.  
           We help you train your inner-voice by helping you to 
           challenge your negative thoughts,
            and replace those thoughts with more postiive ones.
            </p> 
            </div>
            <div className="howItWorks">
            <h2>How it works</h2>
              <ul>
                <li>Register for the app here.</li>
                <li>Fill out a 5 minute daily journal entry that 
                  prompts you to challenge the negative thoughts you had that day.</li>
                <li>View your progress and watch your mood grow with your positive thoughts.</li>
              </ul>
              
            </div>
            <div className="registrationForm">
            <h3>Register Today.</h3>
        <RegistrationForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(LandingPage);