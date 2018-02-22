import React from "react";
import './journalDetail.css';

export default function JournalDetail(props) {
    return (
        <div className="journalDetail">
            <span className="display">
                <i className="fas fa-plus"></i>
                <h3>MM.DD.YYYY</h3>
                <i className="far fa-edit"></i>
                <i className="fas fa-trash-alt"></i>  
            </span> 
            <h3>Describe a negative thought or thoughts you had today:</h3>
            <p></p>
            <h3>How does that thought make you feel?</h3>
            <h3>Is there substantial evidence for my thought?</h3>
            <p></p>
            <h3>Is there evidence contrary to my thought?</h3>
            <p></p>
            <h3>What would a positive alternative thought be in this instance?</h3>
            <p></p>
            <h3>How does the postive thought make you feel?</h3>
        </div>
    );
};