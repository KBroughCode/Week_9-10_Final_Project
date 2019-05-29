import React from 'react';

const StartButton = (props) => {

  return(
    <button onClick = {props.shuffleDeck()}>Start</button>
  )
}
export default StartButton;
