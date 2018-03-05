import React, { Component } from 'react';
import Chart from './chart.js';
import JournalForm from './journalForm.js';

class Dashboard extends Component {
    render () {
        return(
            <div>
                <Chart />
                <JournalForm />
            </div>
        );
    }
}

export default Dashboard;