import React from 'react';
import Card from './Card';
import './playerCards.css';

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
    <div className = "players-cards">
    { playerCards }
    </div>
  )
}


export default PlayerCard
