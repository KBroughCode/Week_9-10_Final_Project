import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <StartButton
      shufflePlayer={props.shufflePlayer}
      />
      <TwistButton
        twistPlayer={props.twistPlayer}
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
