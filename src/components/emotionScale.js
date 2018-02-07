import React from "react";
import './emotionScale.css';

import coolFace from '../images/260102-emoji/svg/cool-1.svg';
import crying from '../images/260102-emoji/svg/crying-2.svg';
import sad from '../images/260102-emoji/svg/sad-2.svg';
import neutral from '../images/260102-emoji/svg/confused.svg';
import happy from '../images/260102-emoji/svg/happy-2.svg';

export default function EmotionScale() {
    return (
        <div className="emotionScale">
            <label>How do you feel?</label>
            <div>
                <img src={crying} className="emoji" alt="crying face" />
                <img src={sad} className="emoji" alt="sad face" />
                <img src={neutral} className="emoji" alt="neutral face" />
                <img src={happy} className="emoji" alt="happy face" />
                <img src={coolFace} className="emoji" alt="cool" />
            </div>
        </div>
    );
};