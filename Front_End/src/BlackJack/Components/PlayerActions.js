import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <StartButton
        shufflePlayer={props.shufflePlayer}
        coins={props.coins}
        payCoins={props.payCoins}
      />
      <TwistButton
        twistPlayer={props.twistPlayer}
      />
      <StickButton
        declareWinner={props.declareWinner}
        playerHand={props.playerHand}
        dealerHand={props.dealerHand}
        winCoins={props.winCoins}
      />
    </div>
  )
}

export default PlayerActions;
