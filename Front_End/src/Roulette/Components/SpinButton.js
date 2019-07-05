import React from 'react';

const SpinButton = (props) => {

  const buttonText = props.wheelSpinning ? null :
    <button className="action-button" onClick={props.startSpin}>Spin</button>;


  return buttonText;

};

export default SpinButton;
