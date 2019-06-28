import React from 'react';

const Card = (props) => {

  const handleImgClick = () => {
    console.log(props);
    if (props.player === 'two' && props.drawCard === false) {
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

  if (props.player === 'one') {
    return(
      <div className="playing-flip-card-inner">
        <div className = "playing-flip-card-back">
          <img onClick={handleImgClick} aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key ={props.key} ></img>
        </div>
        <div className = "playing-flip-card-front"></div>
      </div>
    );
  } else {
    return(
      <div className="playing-flip-card-inner">
        <div className = "playing-flip-card-back">
          <img onClick={handleImgClick} aria-label='image' src='http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-fan-back-1_grande.png?v=1530155076' alt={props.code} width = '180' height = '255' key ={props.key} ></img>
        </div>
        <div className = "playing-flip-card-front"></div>
      </div>
    );
  }

};

export default Card;
