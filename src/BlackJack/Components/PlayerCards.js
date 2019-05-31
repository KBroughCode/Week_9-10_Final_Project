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


  if(playerTotal.length === 0){
    // console.log('gone bust', playerTotal);
    return`You have gone bust ${props.cards}`
  }else{
    // console.log('not bust', playerTotal);
    const displayValue = playerTotal.reduce((acc, ele) => {
      return `${acc} or ${ele}`
  },'')



  console.log(displayValue);
    return(
      <div>
      <div className = "players-cards">
      { playerCards }
      </div>
      <h2> Current Total: { displayValue } </h2>
    </div>
    )
  }
}




export default PlayerCard
