import React, { Component } from 'react';
import JournalListView from './journalListView.js';
import JournalDetail from './journalDetail.js';

class JournalHistory extends Component {
    render () {
        return(
            <div>
                <JournalListView />
                {/* remove Journal Detail,  will me rendered conditionally with list view component */}
                <JournalDetail />
            </div>
        );
    }
}

export default JournalHistory;