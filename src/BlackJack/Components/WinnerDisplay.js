import React from 'react';
import { Link } from "react-router-dom";

const WinnerDisplay = (props) => {

  const handleClick = () => {
    props.resetDefault()
  }

  return(
    <div>
      <div>{props.winner.winner} is the winner with a hand value of {props.winner.value}</div>
      <Link to='/' onClick={handleClick}>Exit to Main Menu</Link>
    </div>
  )
}

export default WinnerDisplay;
