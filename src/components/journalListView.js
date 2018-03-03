import React from "react";
import './journalListView.css';

export default function JournalListView(props) {
    return (
        <div className="journalListView">
            <div className="listViewMenu">
                <i className="fas fa-plus" id="icon"></i>
                <i className="fas fa-trash-alt" id="icon"></i> 
                <i className="far fa-edit" id="icon"></i>
            </div> 
            <div className="journalDate">
            <h3>MM.DD.YYYY</h3>  
            </div>
        </div>
    );
};