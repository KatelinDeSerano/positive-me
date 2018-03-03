import React from "react";
import './journalDetail.css';

export default class AddressBook extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            journal: {
                negativeThought: "I'm terrible at this.",
                negativeFeeling: 1,
                negativeEvidence: "It's terrible.",
                alternativeEvidence: "It's not really terrible, it works.",
                positiveThought: "I can improve on this,  I can practice and get better.",
                positiveFeeling: 4,
                date: "1/1/2018"
            }
        };
    }
    
    render() {
        console.log(this.state);
        // const journal = this.state.map((journal, index) =>
        //     <AddressBook key={index} index={index} {...journal} />
        // );  
        return (
            <div className="journalDetail">
                <div className="journalDetailMenu">
                    <i className="fas fa-plus" id="icon"></i>
                    <i className="fas fa-trash-alt" id="icon"></i>
                    <i className="far fa-edit" id="icon"></i>s
                </div> 
                <div className="journalContent">
                <h3>{this.state.journal.date}</h3>
                <ul>
                <li>Describe a negative thought or thoughts you had today:</li>
                <p>{this.state.journal.negativeThought}</p>
                <li>How does that thought make you feel?</li>
                <p>{this.state.journal.negativeFeeling}</p>
                <li>Is there substantial evidence for my thought?</li>
                <p>{this.state.journal.negativeEvidence}</p>
                <li>Is there evidence contrary to my thought?</li>
                <p>{this.state.journal.alternativeEvidence}</p>
                <li>What would a positive alternative thought be in this instance?</li>
                <p>{this.state.journal.positiveThought}</p>
                <li>How does the postive thought make you feel?</li>
                <p>{this.state.journal.positiveFeeling}</p>
                </ul>
                </div>
            </div>
        );
    }
}

