import React, { Component } from 'react';
import Chart from './chart.js';
import JournalForm from './journalForm.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function Dashboard(props) {
    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }
        return (
            <div>
                <Chart />
                <JournalForm />
            </div>
        );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);