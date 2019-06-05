import React from 'react';
import DeckCard from './DeckCard'
import './snapCards.css'


const DeckCards = (props) =>{

  const deckCards = props.deck.map((card, index)=>{
    return (
      <DeckCard
        key={index}
        image={card.image}
        value={card.value}
        suit={card.suit}
        code={card.code}
      />
    );
  });

  return(
    <div className = "deck-cards"> { deckCards.slice(-1) } </div>
  );

};

export default DeckCards;
