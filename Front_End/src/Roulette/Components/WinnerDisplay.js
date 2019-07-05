import React from 'react';
import { Link } from "react-router-dom";

// displayButtons and displayResult only render values if a result has been returned by the wheel
const WinnerDisplay = (props) => {

  // displayButtons and displayResult only render values if a result has been returned by the wheel
  const displayResult = (numberString) => {
    return numberString ? `The winning number is ${numberString}` : null;
  }

  const displayButtons = (numberString) => {
    return numberString ?
    <>
    <Link className='action-button' to='/roulette' onClick={handleClick} >New Game</Link>
    <Link className='action-button' to='/' >Exit to Main Menu</Link>
    </>
    : null;
  }

  const handleClick = () => {
    props.resetBoard();
  }

  return(
    <div className='win-display'>
      <div>
        {displayButtons(props.winningNumber)}
      </div>
      <div className='bottom-bar-cell-2'>
        {displayResult(props.winningNumber)}
      </div>
    </div>
  );

};

export default WinnerDisplay;
