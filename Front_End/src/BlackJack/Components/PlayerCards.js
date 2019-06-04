import React from 'react';
import Card from './Card';
import evaluateCards from '../Logic/HandValueLogic'
import './playerCards.css';

const PlayerCard = (props) =>{

  const playerCards = props.cards.map((playerCard, i)=> {
    return(
    <Card
      image = {playerCard.image}
      code = {playerCard.code}
      value = {playerCard.value}
      suit = {playerCard.suit}
      key= {i}
      index='0'
    />
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
      <div className = 'player-box'>
        <div className ='player-cards' >
          <div>{ playerCards }</div>
        </div>
        <div className = 'player-text'>
          <div>{displayValue()}</div>
        </div>
    </div>
    )
  }

export default PlayerCard
