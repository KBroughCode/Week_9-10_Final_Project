import React from 'react';

const Card = (props) => {
  return(
    <div className="playing-flip-card-inner">
      <div className = "playing-flip-card-back">
        <img aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key ={props.key} ></img>
      </div>
      <div className = "playing-flip-card-front">
        <div className="card-details">{props.value} of {props.suit}</div>
        <div className="card-details"></div>
      </div>
    </div>

  )
}

export default Card;
