import React from 'react';

const Card = (props) => {

  const handleImgClick = () => {
    console.log(`${props.value} has been clicked cpu hand`);    
  }

  return(
    <div className="playing-flip-card-inner">
      <div className = "playing-flip-card-back">
        <img onClick={handleImgClick}aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key ={props.key} ></img>
      </div>

        <div className = "playing-flip-card-front"></div>

    </div>

  )
}

export default Card;
