import React from 'react';
import Card from './Card';
import './playerCards.css';
import handValue from '../Logic/WinLogic'

const PlayerCard = (props) =>{

  const playerCards = props.cards.map((playerCard, i)=> {
    return <Card
      image = {playerCard.image}
      code = {playerCard.code}
      value = {playerCard.value}
      suit = {playerCard.suit}
      key= {i}
    />
  })

  return(
    <div>
    <div className = "players-cards">
      { playerCards }

    </div>
    <h1> Current Total: {handValue} </h1>
    </div>

  )
}


export default PlayerCard
