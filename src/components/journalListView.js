import React from "react";
import './journalListView.css';

export default function JournalListView(props) {
    return (
        <div className="journalListView">
            <span className="display">
            <i className="fas fa-plus"></i>
            <h3>MM.DD.YYYY</h3>
            <i className="far fa-edit"></i>
            <i className="fas fa-trash-alt"></i>  
            </span> 
        </div>
    );
};