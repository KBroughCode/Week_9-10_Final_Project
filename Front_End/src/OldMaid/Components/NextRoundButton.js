import React from 'react';

const NextRoundButton = (props) => {

  const handleClick = () => {
    if (props.drawCard === true) {
      props.playRound()
      props.toggleDraw()
      if (props.two.length > 12 && props.handSize2 === 'small') {
        props.setHandSizes('two')
      }
      if (props.one.length < 12 && props.handSize1 === 'large') {
        props.setHandSizes('one')
      }
      if (props.three.length > 12 && props.handSize3 === 'small') {
        props.setHandSizes('three')
      }
      if (props.two.length < 12 && props.handSize2 === 'large') {
        props.setHandSizes('two')
      }
      if (props.four.length > 12 && props.handSize4 === 'small') {
        props.setHandSizes('four')
      }
      if (props.three.length < 12 && props.handSize3 === 'large') {
        props.setHandSizes('three')
      }
    }
  };

  if (props.drawCard === true) {
    return(
      <div>
        <button className="action-button" onClick={handleClick}>Next Round</button>
      </div>
    );
  } else {
    return null
  }


};

export default NextRoundButton;
