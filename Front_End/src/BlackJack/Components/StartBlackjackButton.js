import React from 'react';

const StartBlackjackButton = (props) => {
  return(
    <button className= "start-game" onClick={props.handleGameStart}>Start Game</button>
  )
}

export default StartBlackjackButton
