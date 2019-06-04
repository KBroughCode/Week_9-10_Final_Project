import React from 'react';
import Card from './Card';

const OldMaidPlayerHand = (props) => {

  const mapHand = props.hand.map((element, index) => {
    return(
      <div className = "old-maid-card">
      <Card
        key={index}
        image={element.image}
        value={element.value}
        suit={element.suit}
        code={element.code}
      />
      </div>
    )
  })

  return(
    <div>{mapHand}</div>
  )
}

export default OldMaidPlayerHand;
