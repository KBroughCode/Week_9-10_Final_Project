import React from 'react'
import './winGame.css'

const WinnerDisplay = (props) =>{

  const checkWinner = () => {
    if (props.maidWin === 1) {
      return (
        <div className='win-text'>Conratulations! You Won!!!</div>
      )
    } else if (props.maidWin === 2) {
      return (
        <div className='win-text'>Unlucky, Player 2 Won...</div>
      )
    } else if (props.maidWin === 3) {
      return (
        <div className='win-text'>Unlucky, Player 3 Won...</div>
      )
    } else if (props.maidWin === 4) {
      return (
        <div className='win-text'>Unlucky, Player 4 Won...</div>
      )
    }
  }

  if (props.maidWin !== 0) {
    return (
      <div className='win-container'>
        {checkWinner()}
        <button className='win-button' value="Play Again!" onClick={() => {window.location.reload()}}>Play Again!</button>
      </div>
    )
  } else {
    return null;
  }
}
export default WinnerDisplay
