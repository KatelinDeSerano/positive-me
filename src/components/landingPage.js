import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
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

        <h2>How it works</h2>
        <div className="howItWorks">
          <div className="howItWorksPoint">
            <i className="far fa-check-circle fa-3x"></i>
            <h3>Register for the app here.</h3>
          </div>
          <div className="howItWorksPoint">
            <i className="fas fa-pencil-alt fa-3x"></i>
            <h3>Fill out a 5 minute daily journal entry that
                  prompts you to challenge the negative thoughts you had that day.</h3>
          </div>
          <div className="howItWorksPoint">
            <i className="fas fa-chart-line fa-3x"></i>
            <h3>View your progress and watch your mood grow with your positive thoughts.</h3>
          </div>
        </div>
        <div className="registrationPage">
          <span>
            <div className="authButtons">
              <Link to="/login" className="button" > Login </ Link>
              <Link to="/register" className="button" > Register</ Link>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);