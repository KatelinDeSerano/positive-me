import React from "react";
import './journalListView.css';
import { connect } from "react-redux";
import { deleteEntry, toggleEntrySelected, loadCurrentJournalEntry, editJournalEntry } from "../actions/positive.js";
import Moment from 'react-moment';
import './journalForm.css';
import { Link } from "react-router-dom";

import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';
import coolFace from '../images/260102-emoji/svg/cool-1.svg';

export class JournalListView extends React.Component {

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
        this.props.dispatch(loadCurrentJournalEntry(entry));
    }

    editJournalEntry(data_id, data) {
        this.props.dispatch(editJournalEntry(data._id, data));
    }

    render() {

        const journalEntries = this.props.journal.map((entry, _id) => {
            let negativeEmoji, positiveEmoji;
            if (entry.emojiValue1 === 1) {
                negativeEmoji = crying;
            } else if (entry.emojiValue1 === 2) {
                negativeEmoji = sad;
            } else if (entry.emojiValue1 === 3) {
                negativeEmoji = neutral;
            } else if (entry.emojiValue1 === 4) {
                negativeEmoji = happy;
            } else if (entry.emojiValue1 === 5) {
                negativeEmoji = coolFace;
            }
            if (entry.emojiValue2 === 1) {
                positiveEmoji = crying;
            } else if (entry.emojiValue2 === 2) {
                positiveEmoji = sad;
            } else if (entry.emojiValue2 === 3) {
                positiveEmoji = neutral;
            } else if (entry.emojiValue2 === 4) {
                positiveEmoji = happy;
            } else if (entry.emojiValue2 === 5) {
                positiveEmoji = coolFace;
            }
            console.log(negativeEmoji)

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
                            <li className="label">Describe a negative thought or thoughts you had today:</li>
                            <p id="negThought">{entry.negativeThought}</p>
                            <li className="label">How does that thought make you feel?</li>
                            <img src={negativeEmoji}
                                className="emoji" alt="emoji" />
                            {/* <li>Is there substantial evidence for my thought?</li>
                            <p>{this.state.journal.negativeEvidence}</p> */}
                            <li className="label">Is there evidence contrary to my thought?</li>
                            <p className="entryField" >{entry.evidenceAgainstThought}</p>
                            <li className="label">What would a positive alternative thought be in this instance?</li>
                            <p className="entryField">{entry.positiveThought}</p>
                            <li className="label">How does the postive thought make you feel?</li>
                            <img src={positiveEmoji}
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