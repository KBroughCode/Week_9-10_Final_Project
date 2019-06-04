import React from 'react';
import { Link } from "react-router-dom";

const WinnerDisplay = (props) => {

  const handleClick = () => {
    props.handleGameStart();
    props.resetDefault();
    props.getDeck();
  }

  const handleHomeClick = () => {
    props.resetDefault();
    props.handleGameStart();
  }

  return(
    <div>
      <div>{props.winner.winner} is the winner with a hand value of {props.winner.value}</div>
      <Link className = "new-game" to='/blackjack' onClick={handleClick}>New Game</Link>
      <Link className = "exit" to='/' onClick={handleHomeClick}>Exit to Main Menu</Link>
    </div>
  )
}



export default WinnerDisplay;
