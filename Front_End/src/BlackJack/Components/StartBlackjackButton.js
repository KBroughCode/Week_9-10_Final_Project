import React from 'react';

const StartBlackjackButton = (props) => {

  const handleClick = () => {
    props.payCoins(10)
    props.handleGameStart()
  }

  if(props.coins<10){
    return(
      <div> You do not have enough coins to play</div>
    );
  }else{
    return(
      <button onClick={handleClick}>Start Game</button>
    )
  }
}

export default StartBlackjackButton
