import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <TwistButton />
      <Start />
    </div>
  )
}

export default PlayerActions;
