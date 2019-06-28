import React from 'react';
import Card from './Card';
import PairsLogic from '../Logic/PairsLogic';

const OldMaidPlayerHand = (props) => {

  let logic = new PairsLogic()
  let reducedHand = logic.removePairs(props.hand)

  if (reducedHand.length !== props.hand.length) {
    props.updateCpuHand(reducedHand, props.player);
  }

  const mapHand = reducedHand.map((element, index) => {
    return(
      <div className = {props.handSize}>
        <Card
          key={index}
          image={element.image}
          value={element.value}
          suit={element.suit}
          code={element.code}
          object={{...element, index: index}}
          {...props}
          />
      </div>
    );
  });

  return(
    <div>{mapHand}</div>
  );

};

export default OldMaidPlayerHand;
