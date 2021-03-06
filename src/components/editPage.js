import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import JournalEditForm from './journalEditForm.js';

export function EditPage(props) {
    // If we are logged in (which happens automatically when Login
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="home">
            <JournalEditForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(EditPage);