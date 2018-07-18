import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import JournalEditForm from './journalEditForm.js';
// TO DO: add handle error for login

export function EditPage(props) {
    // If we are logged in (which happens automatically when Login
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="home">
            <h2>EDIT</h2>
            <JournalEditForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(EditPage);