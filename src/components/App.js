import React from 'react';
import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';
import {withRouter, Router, Route, Link} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.loggedIn && !this.props.loggedIn) {
    //         // When we are logged in, refresh the auth token periodically
    //         this.startPeriodicRefresh();
    //     } else if (!nextProps.loggedIn && this.props.loggedIn) {
    //         // Stop refreshing when we log out
    //         this.stopPeriodicRefresh();
    //     }
    // }

    // componentWillUnmount() {
    //     this.stopPeriodicRefresh();
    // }

    // startPeriodicRefresh() {
    //     this.refreshInterval = setInterval(
    //         () => this.props.dispatch(refreshAuthToken()),
    //         60 * 60 * 1000 // One hour
    //     );
    // }

    // stopPeriodicRefresh() {
    //     if (!this.refreshInterval) {
    //         return;
    //     }

    //     clearInterval(this.refreshInterval);
    // }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Router>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/register" component={RegistrationPage} />
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // hasAuthToken: state.auth.authToken !== null,
    // loggedIn: state.auth.currentUser !== null
    hasAuthToken: true,
    loggedIn: "CurrentUser"
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking

// export default withRouter(connect(mapStateToProps)(App));

export default (App);

