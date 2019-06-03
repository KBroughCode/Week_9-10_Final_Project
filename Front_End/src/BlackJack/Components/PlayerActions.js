import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';
import './PlayerActions.css'

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <StartButton className = "start-button"
      shufflePlayer={props.shufflePlayer}
      />
      <TwistButton className = "twist-button"
        twistPlayer={props.twistPlayer}
      />
      <StickButton className = "stick-button"
        declareWinner={props.declareWinner}
        playerHand={props.playerHand}
        dealerHand={props.dealerHand}
      />
    </div>
  )
}

export default PlayerActions;
