import React from 'react';
import PlayerCard from './PlayerCard';
import './fanCards.css'

const OldMaidHumanPlayerHand = (props) => {

  const mapHand = props.hand.map((element, index) => {
    return(
      <div className = {props.handSize}>
        <PlayerCard
          handSize={props.hand.length}
          key={index}
          image={element.image}
          value={element.value}
          suit={element.suit}
          code={element.code}
          pairing={props.pairing}
          object={{...element, index: index}}
        />
      </div>
    );
  });

  return(
    <div>{mapHand}</div>
  );

};

export default OldMaidHumanPlayerHand;
