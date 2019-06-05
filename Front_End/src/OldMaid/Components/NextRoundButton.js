import React from 'react';

const NextRoundButton = (props) => {

  const handleClick = () => {
    props.playRound()
  }

  return(
    <div>
      <button onClick={handleClick}>Next Round</button>
    </div>
  )
}

export default NextRoundButton;
