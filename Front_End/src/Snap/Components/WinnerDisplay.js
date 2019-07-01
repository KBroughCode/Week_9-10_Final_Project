import React from 'react'
import "./win-lose.css"

const WinnerDisplay = (props) =>{

  if (props.snapWin === 1) {
    return (
      <div><img src="./SNAP.png" alt="SNAP!" className='snap-image'></img></div>
    )
  } else if (props.snapWin === 2) {
    return (
      <div><img src="./WRONG.png" alt="WRONG!" className='snap-image'></img></div>
    )
  }
  return null
}
export default WinnerDisplay
