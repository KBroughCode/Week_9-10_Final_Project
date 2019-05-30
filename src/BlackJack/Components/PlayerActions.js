import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <TwistButton
        twistPlayer={props.twistPlayer}
      />
      <StartButton
        shufflePlayer={props.shufflePlayer}
      />
      <StickButton
        declareWinner={props.declareWinner}
        playerHand={props.playerHand}
        dealerHand={props.dealerHand}
      />
    </div>
  )
}

export default PlayerActions;
