import React from 'react';

const TwistButton = (props) => {

  const checkBelow5Cards = props.cards.length < 5 ? true : false;

  return (
    <div>
      { checkBelow5Cards && <button className = "action-button" onClick = {props.twistPlayer}>Twist</button> }
    </div>
  );

};

export default TwistButton;
