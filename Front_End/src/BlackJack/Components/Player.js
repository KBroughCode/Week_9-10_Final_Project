import React from 'react'
import PlayerCards from './PlayerCards'
import PlayerActions from './PlayerActions'

import '../blackjack.css';

const Player = (props) =>{

  return(
    <>
      <div>
        <PlayerActions
          twistPlayer={props.twistPlayer}
          shufflePlayer={props.shufflePlayer}
          declareWinner={props.declareWinner}
          playerHand={props.cards}
          dealerHand={props.dealer}
          winner={props.winner}
          coins={props.coins}
          winCoins={props.winCoins}
          payCoins={props.payCoins}
        />
      </div>
      <div className = 'player-container'>
        <PlayerCards
          cards={props.cards}
        />
      </div>
    </>
  )
  
};

export default Player;
