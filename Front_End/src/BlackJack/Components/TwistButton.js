import React from 'react';

const TwistButton = (props) => {

  const checkButtonRender = (props.cards.length < 5 && !props.playerBust) ? true : false;

  return (
    <div>
      { checkButtonRender && <button className = "action-button" onClick = {props.twistPlayer}>Twist</button> }
    </div>
  );

};

export default TwistButton;
