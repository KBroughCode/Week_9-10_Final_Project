import React from 'react';
import { Link } from "react-router-dom";

// import '../../Blackjack/blackjack.css';
// import '../../Blackjack/Components/buttons.css';

const displayResult = (numberString) => {
  return numberString ? `The winning number is ${numberString}` : null;
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
    <div>
      {displayResult(props.winningNumber)}
      <Link className='game-link' to='/roulette' >New Game</Link>
      <Link className='game-link' to='/' >Exit to Main Menu</Link>
    </div>
  );
// onClick={handleClick}
// onClick={handleHomeClick}

};

export default WinnerDisplay;
