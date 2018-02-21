import React from "react";
import './minJournalView.css';

export default function MinJournalView(props) {
    return (
        <div className="minJournalView">
            <span className="display">
            <i className="fas fa-plus"></i>
            <h3>MM.DD.YYYY</h3>
            <i className="far fa-edit"></i>
            <i className="fas fa-trash-alt"></i>  
            </span> 
        </div>
    );
};