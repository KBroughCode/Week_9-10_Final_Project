import React from 'react';
import isMatch from '../Logic/TimeInterval';

const PlayerActions = (props) =>{

  const pileCardValues = props.pile.map((card)=>{
    return card.value
  })

  const handleClick = () =>{
    props.handleGamePause();
    props.togglePause()
    const matching = isMatch(pileCardValues);
    if(matching === true){
      props.toggleSnap(1);
      props.winCoins(10);
    }else{
      props.toggleSnap(2);
      props.payCoins(10);
    };
  };

  const handleResume = () => {
    props.togglePause()
    props.startGame()
  }

  if (props.pause === false) {
    return(
      <div className = "snap-player-actions">
        <button className = "action-button" onClick = {handleClick}>SNAP!</button>
      </div>
    );
  }
  return(
    <div className = "snap-player-actions">
      <button className = "action-button" onClick = {handleResume}>Resume</button>
    </div>
  );

};


export default PlayerActions;
