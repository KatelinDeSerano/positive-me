import React from "react";
import './journalDetail.css';

import coolFace from '../images/260102-emoji/svg/cool-1.svg';
import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';

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

        this.emoji = [
            crying,
            sad,
            neutral,
            happy,
            coolFace  
        ];

    }
    
    render() {
        console.log(this.state);

        console.log(this.emoji);
        // const journal = this.state.map((journal, index) =>
        //     <AddressBook key={index} index={index} {...journal} />
        // );  
        return (
            <div className="journalDetail">
                <div className="journalDetailMenu">
                    <i className="fas fa-plus" id="icon"></i>
                    <i className="fas fa-trash-alt" id="icon"></i>
                    <i className="far fa-edit" id="icon"></i>
                </div> 
                <div className="journalContent">
                <h3>{this.state.journal.date}</h3>
                <ul>
                <li>Describe a negative thought or thoughts you had today:</li>
                <p>{this.state.journal.negativeThought}</p>
                <li>How does that thought make you feel?</li>
                <img src={this.emoji[this.state.journal.negativeFeeling]} 
                    className="emoji" />
                <li>Is there substantial evidence for my thought?</li>
                <p>{this.state.journal.negativeEvidence}</p>
                <li>Is there evidence contrary to my thought?</li>
                <p>{this.state.journal.alternativeEvidence}</p>
                <li>What would a positive alternative thought be in this instance?</li>
                <p>{this.state.journal.positiveThought}</p>
                <li>How does the postive thought make you feel?</li>
                <img src={this.emoji[this.state.journal.positiveFeeling]} 
                    className="emoji" />
                </ul>
                </div>
            </div>
        );
    }
}

