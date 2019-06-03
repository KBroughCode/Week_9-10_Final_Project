import React from 'react';
import checkWinner from '../Logic/WinLogic';

const StickButton = (props) => {
  const handleClick = () => {
    const winnerDetails = checkWinner(props.playerHand, props.dealerHand)
    props.declareWinner(winnerDetails);
  }

  return(
    <button className = "stick-button" onClick={handleClick}>Stick</button>
  )
}

export default StickButton
