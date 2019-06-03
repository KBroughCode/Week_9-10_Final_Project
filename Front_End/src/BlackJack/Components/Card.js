import React from 'react';

const Card = (props) => {
  return(
    <div className="playing-flip-card-inner">
      <div className = "playing-flip-card-back">
        <img aria-label='image' src={props.image} alt={props.code}></img>
      </div>
      <div className = "playing-flip-card-front">
        <div className="card-details"></div>
      </div>
    </div>

  )
}

export default Card;

// <div className="card">
//{props.value} of {props.suit}
