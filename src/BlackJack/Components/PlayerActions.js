import React from 'react';
import TwistButton from './TwistButton';
import StartButton from './StartButton';

const PlayerActions = (props) =>{

  return(
    <div className = "action-buttons">
      <TwistButton
        twistPlayer={props.twistPlayer}
      />
      <StartButton
        shufflePlayer={props.shufflePlayer}
      />
    </div>
  )
}

export default PlayerActions;
