
import React from 'react';

const Card = (props) => {
  return(
    <div className="card">
      <img src={props.image} alt={props.code}></img>
      <div className="card-details">{props.value} of {props.suit}</div>
    </div>
  )
}

export default Card;
