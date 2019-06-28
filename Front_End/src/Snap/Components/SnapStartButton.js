import React from 'react';

const SnapStartButton = (props) => {
  return(
    <button className = "action-button" onClick={props.handleGameStart}>Start Game</button>
  )
}

export default SnapStartButton
