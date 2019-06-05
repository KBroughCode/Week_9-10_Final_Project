import React from 'react';
import PileCard from './PileCard';
import './snapCards.css'
import isMatch from '../Logic/TimeInterval'


const PileCards = (props) =>{

  const pileCards = props.pile.map((card, index)=>{
    return <PileCard
      key={index}
      image={card.image}
      index={card.index}
      value={card.value}
      suit={card.suit}
      code={card.code}
      handleGamePause={props.handleGamePause}
      startGame={props.startGame}
    />
  })

  return(
    <>
      <div className = "pile-cards">{pileCards[0]}</div>
    </>
  )
}

export default PileCards
