import React from 'react';
import Card from './Card';
import './playerCards.css';
import evaluateCards from '../Logic/HandValueLogic'

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

  const playerTotal = (evaluateCards(props.cards))

  const displayValue =() => {
    switch (playerTotal.length) {
      case 0:
        return`You have gone bust`
      case 1:
        return `Current total: ${playerTotal[0]}`
      case 2:
        return `Current totals: ${playerTotal[0]} or ${playerTotal[1]}`
      default:
        return `UH OH SPAGHETTI OHs`
    }
  }

    return(
      <div>
      <div className = 'players-cards'>
      { playerCards }
      </div>
      <div className = 'player-total'>{displayValue()} </div>
    </div>
    )
  }

export default PlayerCard
