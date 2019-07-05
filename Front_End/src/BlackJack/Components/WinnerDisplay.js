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

  const winnerText = (props.playerBust && props.dealerBust) ?
    <div>The dealer wins</div> :
    <div>The {props.winner.winner} wins with a total of {props.winner.value}</div>;

  return(
    <div>
      {winnerText}
      <Link className='game-link' to='/blackjack' onClick={handleClick}>New Game</Link>
      <Link className='game-link' to='/' onClick={handleHomeClick}>Exit to Main Menu</Link>
    </div>
  );

};

export default WinnerDisplay;
