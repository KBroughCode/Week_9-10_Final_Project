import React from 'react'
import PlayerCards from './PlayerCards'
import PlayerActions from './PlayerActions'

const Player = (props) =>{

  return(
    <div>
      <PlayerCards
        cards={props.cards}
      />
      <PlayerActions
        twistPlayer={props.twistPlayer}
        shufflePlayer={props.shufflePlayer}
      />
    </div>
  )
}

export default Player;
