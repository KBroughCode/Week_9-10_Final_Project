import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';
import StickButton from './StickButton';

const PlayerActions = (props) =>{
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
            />
        </div>
      </div>
    )
  } else if (props.winner) {
    console.log('else if activated');
    return null
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
