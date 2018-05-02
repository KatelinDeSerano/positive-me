import React from "react";
import './journalListView.css';
import { connect } from "react-redux";
import { deleteEntry, toggleEntrySelected } from "../actions/positive.js";
import store from "../store";
import JournalDetail from "../components/journalDetail";

export class JournalListView extends React.Component {
    // TODO: GET DELETE TO REMOVE LIST ITEMS IN THE RIGHT ORDER
    deleteEntry(data_id, data) {

        let newArray = data.filter(item => item._id !== data_id);
        this.props.dispatch(deleteEntry(data_id, newArray));
    }

    toggleSelected(index, journal) {
        journal[index].selected = !journal[index].selected;
        // let content = document.className("journalContent");
        // content.style.maxHeight = null;
        this.props.dispatch(toggleEntrySelected(journal));
        this.forceUpdate();
    }

    render() {

        const journalEntries = this.props.journal.map((entry, index) => {
            let negativeThought;

            if (entry.selected) {
                console.log(entry._id);
                
            }
            return (
                <li key={index} className="listViewMenu">
                    <div className={"viewEntry " + (this.props.journal[index].selected ? "is-closed" : "is-open")}>
                        {/* alter to on click render detail view */}
                        <span onClick={() => this.toggleSelected(index, this.props.journal)}>
                            <i className="fas fa-plus" id="icon"></i>
                        </span>
                        <span onClick={() => this.deleteEntry(entry._id, this.props.journal)}>
                            <i className="fas fa-trash-alt" id="icon"></i>
                        </span>
                        <i className="far fa-edit" id="icon"></i>
                        <h3 className="journalDate">{entry.date}</h3>
                    </div>
                    <div id="journalDetail" className="journalContent">
                        <ul>
                            <li>Describe a negative thought or thoughts you had today:</li>
                            <p>{entry.negativeThought}</p>
                            <li>How does that thought make you feel?</li>
                            <img src={entry.negativeFeeling}
                                className="emoji" />
                            {/* <li>Is there substantial evidence for my thought?</li>
                            <p>{this.state.journal.negativeEvidence}</p> */}
                            <li>Is there evidence contrary to my thought?</li>
                            <p>{entry.evidenceAgainstThought}</p>
                            <li>What would a positive alternative thought be in this instance?</li>
                            <p>{entry.positiveThought}</p>
                            <li>How does the postive thought make you feel?</li>
                            <img src={entry.positiveFeeling}
                                className="emoji" />
                        </ul>
                    </div>
                    {/* {journalDetails}  */}
                </li>
            )
        }
        );


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