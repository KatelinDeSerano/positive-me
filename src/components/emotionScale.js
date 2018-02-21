import React from "react";
import './emotionScale.css';
// import {connect} from "react-redux";

import coolFace from '../images/260102-emoji/svg/cool-1.svg';
import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';

export default class EmotionScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    emojiClick(value) {
        console.log(value);
        this.setState({value: value});
    }

    render() {
        return (
            <div className="emotionScale">
                <label>How do you feel?</label>
                <div className="emojiSelect">
                    <img src={crying} className={"emoji " + (this.state.value===1 ? "selected" : "empty") } alt="crying face" onClick={()=>this.emojiClick(1)}/>
                    <img src={sad} className={"emoji " + (this.state.value===2 ? "selected" : "empty") } alt="sad face" onClick={()=>this.emojiClick(2)} />
                    <img src={neutral} className={"emoji " + (this.state.value===3 ? "selected" : "empty") } alt="neutral face" onClick={()=>this.emojiClick(3)} />
                    <img src={happy} className={"emoji " + (this.state.value===4 ? "selected" : "empty") } alt="happy face" onClick={()=>this.emojiClick(4)} />
                    <img src={coolFace} className={"emoji " + (this.state.value===5 ? "selected" : "empty") } alt="cool" onClick={()=>this.emojiClick(5)} />
                </div>
            </div>
        );
    }
};

