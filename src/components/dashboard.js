import React, { Component } from 'react';
import Chart from './chart.js';
import JournalForm from './journalForm.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchJournal } from '../actions/positive.js';

export class Dashboard extends Component {
    componentWillMount() {
        this.props.dispatch(fetchJournal(this.props.user))
    }
    render() {
        let showError;
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }
        if (this.props.error) {
            showError =
                <p>We have an error</p>
        } else {
            showError =
                <p></p>
        }
        return (
            <div>
                {showError}
                <Chart />
                <JournalForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser.username,
    loggedIn: state.auth.currentUser !== null,
    error: state.positiveReducer.error
});

export default connect(mapStateToProps)(Dashboard);