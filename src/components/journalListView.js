import React from "react";
import './journalListView.css';
import {connect} from "react-redux";
import {deleteEntry} from "../actions/positive.js";
import store from "../store";

export class JournalListView extends React.Component {
    // TODO: GET DELETE TO REMOVE LIST ITEMS IN THE RIGHT ORDER
    deleteEntry(data_id, data) {
        console.log(data)
        let newArray = data.filter(item => item._id !== data_id);
        this.props.dispatch(deleteEntry(data_id, newArray));
    }
    
    render () {
        
       
            const journalEntries = this.props.journal.map((entry, index) => (
                <li key={index} className="listViewMenu">
                {/* alter to on click render detail view */}
                <span onClick = {() => this.deleteEntry(entry._id, this.props.journal)}>
                    <i className="fas fa-plus" id="icon"></i>
                    </span>
                    <span onClick = {() => this.deleteEntry(entry._id, this.props.journal)}>
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
