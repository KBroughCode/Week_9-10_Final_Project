import React from 'react';
import checkWinner from '../Logic/WinLogic';

const StickButton = (props) => {
  const handleClick = () => {
    const winnerDetails = checkWinner(props.playerHand, props.dealerHand)
    props.declareWinner(winnerDetails);
    if (winnerDetails.winner==='Player'){
      props.winCoins(20);
    }
  }

  return(
    <button className = "action-button" onClick={handleClick}>Stick</button>
  )
}

export default StickButton
