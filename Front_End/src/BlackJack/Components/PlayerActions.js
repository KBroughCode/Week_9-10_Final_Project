import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

const PlayerActions = (props) =>{
  if(props.winner) {
    return null
  } else
    if(props.playerHand.length){
      return(
        <div>
          <div className = "action-button">
            <TwistButton
              twistPlayer={props.twistPlayer}
              />
          </div>
          <div className = "action-button">
            <StickButton
              declareWinner={props.declareWinner}
              playerHand={props.playerHand}
              dealerHand={props.dealerHand}
              winCoins={props.winCoins}
              />
          </div>
        </div>
      )
    } else{
        return(
          <div className = "action-button">
          <StartButton
          shufflePlayer={props.shufflePlayer}
          />
          </div>
        )
    }
}

export default PlayerActions;
