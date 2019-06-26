import React from 'react';
import isMatch from '../Logic/TimeInterval';

const PlayerActions = (props) =>{

  const pileCardValues = props.pile.map((card)=>{
    return card.value
  })

  const handleClick = () =>{
    props.handleGamePause();
    const matching = isMatch(pileCardValues);
    if(matching === true){
      props.toggleSnap(1);
      props.winCoins(10);
    }else{
      props.toggleSnap(2);
      props.payCoins(10);
    };
  };

  return(
    <div className = "snap-player-actions">
      <button className = "action-button" onClick = {handleClick}>SNAP!</button>
      <button className = "action-button" onClick = {props.startGame}>Resume</button>
    </div>
  );

};


export default PlayerActions;
