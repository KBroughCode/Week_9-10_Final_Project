import React from 'react';
import PlayerCard from './PlayerCard';
import './fanCards.css'

const OldMaidHumanPlayerHand = (props) => {

  const mapHand = props.hand.map((element, index) => {
    if (props.playerSelectOne) {
      if (element.code === props.playerSelectOne.code) {
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
              hover={props.hover}
              object={{...element, index: index}}
              toggleClass={props.toggleClass}
              selectedCard={props.selectedCard}
            />
          </div>
        );
      }else {
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
              hover={props.hover}
              object={{...element, index: index}}
              toggleClass={props.toggleClass}
              selectedCard={'playing-card-flip-inner'}
            />
          </div>
        );
      }
    } else {
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
            hover={props.hover}
            object={{...element, index: index}}
            toggleClass={props.toggleClass}
            selectedCard={'playing-card-flip-inner'}
          />
        </div>
      );
    }

  });

  return(
    <div>{mapHand}</div>
  );

};

export default OldMaidHumanPlayerHand;
