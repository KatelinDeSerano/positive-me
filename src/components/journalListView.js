import React from "react";
import './journalListView.css';
import { connect } from "react-redux";
import { deleteEntry, toggleEntrySelected, loadCurrentJournalEntry, editJournalEntry } from "../actions/positive.js";
import Moment from 'react-moment';
import './journalForm.css';
import { Link } from "react-router-dom";

// import { Redirect } from 'react-router-dom';
// import JournalDetail from "../components/journalDetail";

export class JournalListView extends React.Component {
    // TODO: GET DELETE TO REMOVE LIST ITEMS IN THE RIGHT ORDER
    ;

    deleteEntry(data_id, data) {
        let newArray = data.filter(item => item._id !== data_id);
        this.props.dispatch(deleteEntry(data_id, newArray));
    }

    toggleSelected(_id, journal) {
        journal[_id].selected = !journal[_id].selected;
        this.props.dispatch(toggleEntrySelected(journal));
        this.forceUpdate();
    }

    loadCurrentJournalEntry(entry) {
        // this.props.currentJournalEntry = this.props.journal[index]
        this.props.dispatch(loadCurrentJournalEntry(entry));
        // this.preventDefault();
    }

    editJournalEntry(data_id, data) {
        // let editEntry = data.filter(item => item._id !== data_id);
        this.props.dispatch(editJournalEntry(data._id, data));
    }

    // ON CLICK OF EDIT BUTTON
    // 1. Load current state of current journal entry
    // 2. Route to Edit Page
    // 3. Edit page populates with current state of current journal entry
    // 4. initialize PUT action - modeled after post request
    // 5. After submit, revert back to list view page

    render() {

        const journalEntries = this.props.journal.map((entry, _id) => {

            return (

                <li key={entry._id} className={"listViewMenu " + (this.props.journal[_id].selected ? "is-open" : "is-closed")}>
                    <div className="viewEntry">
                        <span onClick={() => this.toggleSelected(_id, this.props.journal)}>
                            <i id="icon" className="fas fa-chevron-down"></i>
                        </span>
                        <span onClick={() => this.deleteEntry(entry._id, this.props.journal)}>

                            <i className="fas fa-trash-alt" id="icon"></i>
                        </span>
                        <Link to='/journaledit'>
                            <span onClick={() => this.loadCurrentJournalEntry(entry)}>
                                <i className="far fa-edit" id="icon"></i>
                            </span>
                        </Link>
                        <h3><Moment format="MM/DD/YYYY">
                            {entry.date}
                        </Moment></h3>
                    </div>
                    <div id="journalDetail" className="journalContent">
                        <ul>
                            <li>Describe a negative thought or thoughts you had today:</li>
                            <p id="negThought">{entry.negativeThought}</p>
                            <li>How does that thought make you feel?</li>
                            <img src={entry.negativeFeeling}
                                className="emoji" alt="emoji" />
                            {/* <li>Is there substantial evidence for my thought?</li>
                            <p>{this.state.journal.negativeEvidence}</p> */}
                            <li>Is there evidence contrary to my thought?</li>
                            <p className="entryField" >{entry.evidenceAgainstThought}</p>
                            <li>What would a positive alternative thought be in this instance?</li>
                            <p className="entryField">{entry.positiveThought}</p>
                            <li>How does the postive thought make you feel?</li>
                            <img src={entry.positiveFeeling}
                                className="emoji" alt="emoji" />
                        </ul>
                    </div>
                </li>

            )
        }
        )

        return (
            
                <ul className="journalListView">
                    {journalEntries}
                </ul>
            
        );

    };
};

const mapStateToProps = state => ({
    currentJournalEntry: state.positiveReducer.currentJournalEntry,
    journal: state.positiveReducer.journal,
    user: state.auth.currentUser.username,
})

export default connect(mapStateToProps)(JournalListView);