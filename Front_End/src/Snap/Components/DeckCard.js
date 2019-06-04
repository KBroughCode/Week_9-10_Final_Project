import React from 'react';

const DeckCard = (props) =>{

  return(
    <div>
    <div>{props.value} of {props.suit}</div>
      <div>
        <img aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key={props.key} ></img>
      </div>
        <div></div>
    </div>

  )
}

export default DeckCard
