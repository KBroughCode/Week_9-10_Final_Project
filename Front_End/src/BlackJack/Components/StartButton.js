import React from 'react';

const StartButton = (props) => {
  return(
    <button className = "start-button" onClick = {props.shufflePlayer}>Draw Hand</button>
  )
}
export default StartButton;
