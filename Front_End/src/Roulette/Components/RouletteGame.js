import React, { Component } from 'react'
import Wheel from './Wheel'
import Board from './Board'
import WinnerDisplay from './WinnerDisplay'
import './roulette.css'

class RouletteGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winningNumber: 0,
      numbers: []
    }
  }

  componentDidMount() {
    let numbers = []
    for (var i = 0; i < 36; i++) {
      numbers.push(i+1)
    }
    this.setState({numbers: numbers})
  }

  render() {
    return(
      <>
        <div>
        </div>
        <div>
        </div>
        <div className='gameboard'>
          <Board numbers={this.state.numbers}/>
        </div>
      </>
    )
  }
}

export default RouletteGame
