import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

import '../blackjack.css'


const PlayerActions = (props) =>{

  if(props.winner) {
    return null
  } else
    if(props.playerHand.length){
      return(
        <div className = "player-buttons">
            <TwistButton
              className = "action-button"
              twistPlayer={props.twistPlayer}
              />
            <StickButton
              className = "action-button"
              declareWinner={props.declareWinner}
              playerHand={props.playerHand}
              dealerHand={props.dealerHand}
              winCoins={props.winCoins}
              />
        </div>
      )
    } else{
        return(
          <div className = "player-buttons">
            <StartButton
              className = "action-button"
              shufflePlayer={props.shufflePlayer}
            />
          </div>
        )
    }
}

export default PlayerActions;
