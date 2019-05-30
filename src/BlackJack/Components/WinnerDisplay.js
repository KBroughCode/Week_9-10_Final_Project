import React from 'react';

const WinnerDisplay = (props) => {
  return(
    <div>{props.winner.winner} is the winner with a hand value of {props.winner.value}</div>
  )
}

export default WinnerDisplay;
