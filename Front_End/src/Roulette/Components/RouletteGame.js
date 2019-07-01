import React, { Component } from 'react'
import Wheel from './Wheel'
import Board from './Board'
import WinnerDisplay from './WinnerDisplay'

class RouletteGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winningNumber: 0
    }
  }

  render() {
    return(
      <>
        <div>
          <WinnerDisplay />
        </div>
        <div>
          <Wheel />
        </div>
        <div>
          <Board />
        </div>
      </>
    )
  }
}

export default RouletteGame
