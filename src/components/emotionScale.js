import React from "react";
import './emotionScale.css';
import {connect} from "react-redux";
import {setEmojiValue} from "../actions/positive.js";


import coolFace from '../images/260102-emoji/svg/cool-1.svg';
import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';

export class EmotionScale extends React.Component {

    emojiClick(value) {
        this.props.dispatch(setEmojiValue(value));
        console.log(this.props.value);
    }

    

    render() {
        return (
            <div className="emotionScale">
                <label>How do you feel?</label>
                <div className="emojiSelect">
                    <img src={crying} className={"emoji " + (this.props.value===1 ? "selected" : "empty") } 
                        alt="crying face" onClick={()=>this.emojiClick(1)}/>
                    <img src={sad} className={"emoji " + (this.props.value===2 ? "selected" : "empty") } 
                        alt="sad face" onClick={()=>this.emojiClick(2)} />
                    <img src={neutral} className={"emoji " + (this.props.value===3 ? "selected" : "empty") } 
                        alt="neutral face" onClick={()=>this.emojiClick(3)} />
                    <img src={happy} className={"emoji " + (this.props.value===4 ? "selected" : "empty") } 
                        alt="happy face" onClick={()=>this.emojiClick(4)} />
                    <img src={coolFace} className={"emoji " + (this.props.value===5 ? "selected" : "empty") } 
                        alt="cool" onClick={()=>this.emojiClick(5)} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    value: state.positiveReducer.emojiValue
})

export default connect(mapStateToProps)(EmotionScale);