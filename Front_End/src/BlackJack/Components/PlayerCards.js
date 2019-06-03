import React from 'react';
import Card from './Card';
import evaluateCards from '../Logic/HandValueLogic'
import '../blackjack.css';

const PlayerCard = (props) =>{

  const playerCards = props.cards.map((playerCard, i)=> {
    return(
    <div className = "playing-flip-card">
    <Card
      image = {playerCard.image}
      code = {playerCard.code}
      value = {playerCard.value}
      suit = {playerCard.suit}
      key= {i}
    />
    </div>
  )
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
      <div className ='player-cards' >
      { playerCards }
      </div>
      <div className = 'player-text'>{displayValue()} </div>
    </div>
    )
  }

export default PlayerCard
