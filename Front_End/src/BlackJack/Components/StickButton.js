import React from 'react';
import checkWinner from '../Logic/WinLogic';

const StickButton = (props) => {

  const handleClick = () => {
    const winnerDetails = checkWinner(props.playerHand, props.dealerHand, props.playerBust, props.dealerBust);
    props.declareWinner(winnerDetails);
    if (winnerDetails.winner==='Player'){
      props.winCoins(winnerDetails.coinsWon);
    };
    if (winnerDetails.winner==='Dealer' && winnerDetails.extraCoinsLost) {
      props.payCoins(winnerDetails.extraCoinsLost);
    }
  };

  // confirm acceptable with stakeholders & log bug ('Stick' button when player is bust)
  const buttonText = props.playerBust ? 'Continue' : 'Stick';

  return(
    <button className = "action-button" onClick={handleClick}>{buttonText}</button>
  );

};

export default StickButton;
