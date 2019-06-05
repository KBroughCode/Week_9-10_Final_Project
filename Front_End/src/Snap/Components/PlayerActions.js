import React from 'react';
import isMatch from '../Logic/TimeInterval';
import WinnerDisplay from './WinnerDisplay';
import LoserDisplay from './LoserDisplay';


const PlayerActions = (props) =>{
  const pileCardValues = props.pile.map((card)=>{
    return card.value
  })

  const handleClick = () =>{
    props.handleGamePause();
    const matching = isMatch(pileCardValues)

    if(matching === true){
      props.winCoins(10);
    }else{
      props.payCoins(10);
    }
  }
  
  return(
     <div className = "snap-player-actions">
       <button className = "action-button" onClick = {handleClick}>SNAP!</button>
       <button className = "action-button" onClick = {props.startGame}>Resume</button>
     </div>
   )

}


export default PlayerActions;
