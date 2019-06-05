import React from 'react';


const PlayerActions = (props) =>{

  return(
    <div className = "snap-player-actions">
      <button className = "action-button" onClick = {props.handleGamePause}>SNAP!</button>
      <button className = "action-button" onClick = {props.startGame}>resume</button>
    </div>

  )
}

export default PlayerActions;
