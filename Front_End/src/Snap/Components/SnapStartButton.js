import React from 'react';

const SnapStartButton = (props) => {
  console.log(props);
  return(
    <button className = "action-button" onClick={props.handleGameStart}>Start Game</button>
  )
}

export default SnapStartButton
