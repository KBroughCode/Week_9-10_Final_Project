import React from 'react';

const TwistButton = (props) => {

  return(
    <button className = "twist-button" onClick = {props.twistPlayer}>Twist</button>
  )
}

export default TwistButton;
