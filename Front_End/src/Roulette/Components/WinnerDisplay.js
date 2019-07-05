import React from 'react';
import { Link } from "react-router-dom";

// displayButtons and displayResult only render values if a result has been returned by the wheel
const displayResult = (numberString) => {
  return numberString ? `The winning number is ${numberString}` : null;
}

const displayButtons = (numberString) => {
    return numberString ?
      <>
        <Link className='game-link' to='/roulette' >New Game</Link>
        <Link className='game-link' to='/' >Exit to Main Menu</Link>
      </>
     : null;
}

const WinnerDisplay = (props) => {

  // const handleClick = () => {
  //   props.handleGameStart();
  //   props.resetDefault();
  //   props.getDeck();
  // };
  //
  // const handleHomeClick = () => {
  //   props.resetDefault();
  //   props.handleGameStart();
  // };



  return(
    <>
      <div className='bottom-bar-cell-1'>
        {displayResult(props.winningNumber)}
      </div>
      <div>
        {displayButtons(props.winningNumber)}
      </div>
    </>
  );
// onClick={handleClick}
// onClick={handleHomeClick}

};

export default WinnerDisplay;
