import React from 'react';
import './Message.css'

function Message({ submitted }) {
  return (
    <div className={`message-container ${submitted ? "message-successful" : ""}`}>
      <h3 id="message">{submitted ? `Successfully Registered!` : `Don't Hesitate!`}</h3>
    </div>
  );
}

// function Message3({ submitted }) {
//   const classes = cx(
//     styles.messageContainer,
//     { [styles.messageSuccessful]: submitted },
//   );

//   return (
//     <div className={classes}>
//       <h3 id="message">{submitted ? `Successfully Registered!` : `Don't Hesitate!`}</h3>
//     </div>
//   );
// }


export default Message;