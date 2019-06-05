import React from 'react';

const TwistButton = (props) => {

  return(
    <button className = "action-button" onClick = {props.twistPlayer}>Twist</button>
  )
}

export default TwistButton;
