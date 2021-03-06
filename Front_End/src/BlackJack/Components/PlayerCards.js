import React from 'react';
import Card from './Card';
import evaluateCards from '../Logic/HandValueLogic'
import './playerCards.css';

// changed function name here and in export statement from PlayerCard
const PlayerCards = (props) =>{

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
    );

  });

  const playerTotal = (evaluateCards(props.cards));

  const displayValue =() => {
    switch (playerTotal.length) {
      case 0:
        // inserting dispatch here:
        props.setPlayerBust();
        return`You have gone bust`
      case 1:
        return `Your total is  ${playerTotal[0]}`
      case 2:
        return `Your total is either ${playerTotal[0]} or ${playerTotal[1]}`
      default:
        return null
    };
  };

  return(
    <div className = 'player-box'>
      <div className ='player-cards'>
        <div>{ playerCards }</div>
      </div>
      <div className = 'player-text'>
        <div>{displayValue()}</div>
      </div>
    </div>
  );

};

export default PlayerCards;
