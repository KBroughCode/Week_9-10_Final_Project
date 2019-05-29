import React from 'react';
import Card from './Card';

const PlayerCard = (props) =>{

  const playersCards = props.cards.map((playerCard, i)=> {
    return <Card
    image = {playerCard.image}
    code = {playerCard.code}
    value = {playerCard.value}
    suit = {playerCard.suit}
    />
  })

  return(
    <div className = "players-cards">
    { playerCards }
    </div>
  )
}


export default PlayerCard
