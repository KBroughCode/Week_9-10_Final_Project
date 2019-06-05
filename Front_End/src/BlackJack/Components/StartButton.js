import React from 'react';

const StartButton = (props) => {
  return(
    <button className = "action-button" onClick = {props.shufflePlayer}>Draw Hand</button>
  )
}
export default StartButton;
