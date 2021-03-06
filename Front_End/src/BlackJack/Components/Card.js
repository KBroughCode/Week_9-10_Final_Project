import React from 'react';
import './cards.css'

const Card = (props) => {

  return(
    <img
      className={`card number${props.index}`}
      src={props.image}
      alt={props.code}
      aria-label='image'
    />
  );

};

export default Card;
