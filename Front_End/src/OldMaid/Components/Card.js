import React from 'react';

const Card = (props) => {

  const handleImgClick = () => {
    console.log(props);
    if (props.player == 'two' && props.drawCard === false) {
      props.pickCard(props.object, 'one', props.player)
      props.toggleDraw()
      if (props.humanHand.length > 12 && props.handSize1 === "small") {
        props.setHandSizes('one')
      }
      if (props.hand.length < 12 && props.handSize === "large") {
        props.setHandSizes('one')
      }
    }
  };

  return(
    <div className="playing-flip-card-inner">
      <div className = "playing-flip-card-back">
        <img onClick={handleImgClick} aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key ={props.key} ></img>
      </div>
      <div className = "playing-flip-card-front"></div>
    </div>
  );

};

export default Card;
