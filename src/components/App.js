import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { refreshAuthToken } from '../actions/auth';
import { connect, Provider } from "react-redux";
import store from '../store';
import './App.css';
import LandingPage from './landingPage.js';
import JournalHistory from './journalHistory.js';
import Nav from './nav.js';
import Dashboard from './dashboard.js';
import RegistrationPage from './registrationPage.js';
import LoginPage from './loginPage.js';
import EditPage from './editPage.js';


export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Nav />
                        <Route exact path='/' component={LandingPage} store={store} />
                        <Route exact path='/dashboard' component={Dashboard} store={store} />
                        <Route exact path='/login' component={LoginPage} store={store} />
                        <Route exact path='/journaledit' component={EditPage} store={store} />
                        <Route exact path='/register' component={RegistrationPage} store={store} />
                        <Route exact path='/journal_history' component={JournalHistory} store={store} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);


