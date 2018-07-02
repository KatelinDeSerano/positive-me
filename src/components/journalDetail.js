import React from "react";
import './journalDetail.css';
import store from "../store";
import {connect} from "react-redux";
import coolFace from '../images/260102-emoji/svg/cool-1.svg';
import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';

export class JournalDetail extends React.Component {
    
    render() {
        const journalEntries = this.props.journal.map((entry, index) => {
        return (
            <li>
            <div id="journalDetail" className="journalContent">
                        <ul>
                            <li>Describe a negative thought or thoughts you had today:</li>
                            <p id="negThought">{entry.negativeThought}</p>
                            <li>How does that thought make you feel?</li>
                            <img src={entry.negativeFeeling}
                                className="emoji" />
                            {/* <li>Is there substantial evidence for my thought?</li>
                            <p>{this.state.journal.negativeEvidence}</p> */}
                            <li>Is there evidence contrary to my thought?</li>
                            <p className="entryField" >{entry.evidenceAgainstThought}</p>
                            <li>What would a positive alternative thought be in this instance?</li>
                            <p className="entryField">{entry.positiveThought}</p>
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
    }
}

const mapStateToProps = state => ({
    journal: state.positiveReducer.journal,
    user: state.auth.currentUser.username
})
export default connect(mapStateToProps)(JournalDetail);