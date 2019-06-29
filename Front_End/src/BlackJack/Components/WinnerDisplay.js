import React from 'react';
import { Link } from "react-router-dom";

import '../blackjack.css';
import './buttons.css';

const WinnerDisplay = (props) => {

  const handleClick = () => {
    props.handleGameStart();
    props.resetDefault();
    props.getDeck();
  };

  const handleHomeClick = () => {
    props.resetDefault();
    props.handleGameStart();
  };

  // confirm with stakeholders and log 'Dealers wins with a total of' as bug when both bust.
  const winnerText = (props.playerBust && props.dealerBust) ?
    <div>The dealer wins</div> :
    <div>The {props.winner.winner} wins with a total of {props.winner.value}</div>;

  console.log(props.playerBust);
  console.log(props.dealerBust);
  console.log(winnerText);

  return(
    <div>
      {winnerText}
      <Link className='game-link' to='/blackjack' onClick={handleClick}>New Game</Link>
      <Link className='game-link' to='/' onClick={handleHomeClick}>Exit to Main Menu</Link>
    </div>
  );

};

export default WinnerDisplay;
