import React, { Component } from 'react';
import Chart from './chart.js';
import JournalForm from './journalForm.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchJournal} from '../actions/positive.js';

export class Dashboard extends Component {
    componentWillMount(){
        this.props.dispatch(fetchJournal(this.props.user))
    }
    render(){
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <Chart />
                <JournalForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser.username,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);