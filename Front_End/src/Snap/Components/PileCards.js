import React from 'react';
import PileCard from './PileCard';
import './snapCards.css'
import isMatch from '../Logic/TimeInterval'


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


const pileCardValues = props.pile.map((card,index)=>{
  return card.value

})

console.log(pileCardValues);
  isMatch(pileCardValues)



  return(
    <>
      <div className = "pile-cards">{ pileCards}</div>
      <button onClick = {props.handleGamePause}>pause</button>
      <button onClick = {props.startGame}>re-start</button>
    </>
  )
}

export default PileCards
