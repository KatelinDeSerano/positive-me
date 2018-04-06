import React from "react";
import './journalListView.css';
import {connect} from "react-redux";

export class JournalListView extends React.Component {
    
    render () {
        const journalEntries = this.props.journal.map((entry, index) => (
            <li key={index}>{entry.date}</li>
        ));
        return ( 
            <ul>
                {journalEntries}
            </ul>
        );
    };
};

const mapStateToProps = state => ({
    journal: state.positiveReducer.journal
})
export default connect(mapStateToProps)(JournalListView);


{/* <div className="journalListView">
                <div className="listViewMenu">
                    <i className="fas fa-plus" id="icon"></i>
                    <i className="fas fa-trash-alt" id="icon"></i> 
                    <i className="far fa-edit" id="icon"></i>
                
                <div className="journalDate">
                <h3>MM.DD.YYYY</h3>  
                </div>
                </div> 
            </div> */}