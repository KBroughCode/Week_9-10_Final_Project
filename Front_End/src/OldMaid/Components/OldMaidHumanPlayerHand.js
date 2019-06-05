import React from 'react';
import PlayerCard from './PlayerCard';

const OldMaidHumanPlayerHand = (props) => {

  const mapHand = props.hand.map((element, index) => {
    return(
      <div className = "old-maid-card">
        <PlayerCard
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
