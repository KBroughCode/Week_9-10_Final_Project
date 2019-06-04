import React from 'react';
import PileCard from './PileCard';
import './snapCards.css'


const PileCards = (props) =>{

  const pileCards = props.pile.map((card, index)=>{
    return <PileCard
      key={index}
      image={card.image}
      value={card.value}
      suit={card.suit}
      code={card.code}
      handleGamePause={props.handleGamePause}
      startGame={props.startGame}
    />
  })

  return(
    <>
      <div className = "pile-cards">{ pileCards}</div>
      <button onClick = {props.handleGamePause}>pause</button>
      <button onClick = {props.startGame}>re-start</button>
    </>
  )
}

export default PileCards
