import React from 'react';

const Card = (props) => {

  const handleImgClick = () => {
    props.pairing(props.object);
    props.toggleClass()
  };

  return(
    <div className = 'playing-card-flip-inner'>
      <div className = {props.selectedCard}>
        <img onClick={handleImgClick} aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key ={props.key} ></img>
      </div>
      <div className = "playing-flip-card-front"></div>
    </div>
  );

};

export default Card;
