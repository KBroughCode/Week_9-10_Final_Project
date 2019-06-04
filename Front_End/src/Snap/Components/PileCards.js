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
    />
  })

  return(
    <div className = "pile-cards"> { pileCards} </div>
  )
}

export default PileCards
