// import React from "react";
// import './journalDetail.css';
// import {connect} from "react-redux";
// import coolFace from '../images/260102-emoji/svg/cool-1.svg';
// import crying from '../images/260102-emoji/svg/crying-2.svg';
// import sad from '../images/260102-emoji/svg/sad-2.svg';
// import neutral from '../images/260102-emoji/svg/confused.svg';
// import happy from '../images/260102-emoji/svg/happy-2.svg';

// export class JournalDetail extends React.Component {
    
//     render() {
        
//         let negativeThought = this.props.journal.map(entry =>  {
//             return entry.negativeThought;
//         }); 
//         let negativeFeeling = this.props.journal.map(entry =>  {
//             return entry.emojiValue1;
//         });
//         let evidenceAgainstThought = this.props.journal.map(entry =>  {
//             return entry.evidenceAgainstThought;
//         });
//         let positiveThought = this.props.journal.map(entry =>  {
//             return entry.positiveThought;
//         });
//         let positiveFeeling = this.props.journal.map(entry =>  {
//             return entry.emojiValue2;
//         }); 
//         return (
//             <div className="journalDetail">
//                 <div className="journalDetailMenu">
//                     <i className="fas fa-minus" id="icon"></i>
//                     <i className="fas fa-trash-alt" id="icon"></i>
//                     <i className="far fa-edit" id="icon"></i>
//                 </div> 
//                 <div className="journalContent">
//                 <h3>Date</h3>
//                 <ul>
//                 <li>Describe a negative thought or thoughts you had today:</li>
//                 <p>{negativeThought}</p>
//                 <li>How does that thought make you feel?</li>
//                 <img src={negativeFeeling} 
//                     className="emoji" />
//                 {/* <li>Is there substantial evidence for my thought?</li>
//                 <p>{this.state.journal.negativeEvidence}</p> */}
//                 <li>Is there evidence contrary to my thought?</li>
//                 <p>{evidenceAgainstThought}</p>
//                 <li>What would a positive alternative thought be in this instance?</li>
//                 <p>{positiveThought}</p>
//                 <li>How does the postive thought make you feel?</li>
//                 <img src={positiveFeeling} 
//                     className="emoji" />
//                 </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     journal: state.positiveReducer.journal
// })
// export default connect(mapStateToProps)(JournalDetail);