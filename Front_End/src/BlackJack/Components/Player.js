import React from 'react'
import PlayerCards from './PlayerCards'
import PlayerActions from './PlayerActions'
import '../blackjack.css';

const Player = (props) =>{

  return(
    <div>
      <PlayerCards
        cards={props.cards}
      />
      <PlayerActions
        className = 'player-buttons'
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
  )
}

export default Player;
