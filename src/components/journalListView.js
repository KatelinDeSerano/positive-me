import React from "react";
import './journalListView.css';
import {connect} from "react-redux";
import {deleteEntry} from "../actions/positive.js";
import store from "../store"

export class JournalListView extends React.Component {
    
    // onDeleteClick(event) {
    //     console.log("clicked");
    //     let entryId = this.props.entry.id;
    //     let user = this.props.user;
    //     this.props.deleteEntry(entryId, user);

    // }
    deleteEntry(id, user) {
        this.props.dispatch(deleteEntry(id, user));
    }
    // onDeleteClick(entry, user) {
    //     console.log(entry,user);
    //     store.dispatch(deleteEntry(entry, user));
    // }
    
    render () {
        const journalEntries = this.props.journal.map((entry, index) => (
            <li key={index} className="listViewMenu">
                <i className="fas fa-plus" id="icon"></i>
                <span onClick = {() => this.deleteEntry(entry._id, this.props.user)}>
                    <i className="fas fa-trash-alt" id="icon"></i>
                </span>
                <i className="far fa-edit" id="icon"></i>
                <h3 className="journalDate">{entry.date}</h3>  
            </li>
        ));
        return ( 
            <ul className="journalListView">
                {journalEntries}
            </ul>
        );
    };
};

const mapStateToProps = state => ({
    journal: state.positiveReducer.journal,
    user: state.auth.currentUser.username
})
export default connect(mapStateToProps)(JournalListView);
