import React, { Component } from 'react'
import Wheel from './Wheel'
import Board from './Board'
import WinnerDisplay from './WinnerDisplay'
import PlayerView from './PlayerView'
import './roulette.css'

class RouletteGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winningNumber: 0,
      playerCoins: {g: 0, s: 0, b: 0},
      numbers: [],
      board: [
        [{name: '1to18', value: 0}, {name: '19to36', value: 0}],
        [{name: '0', value: 0}, {name: '3', value: 0}, {name: '6', value: 0}, {name: '9', value: 0}, {name: '12', value: 0}, {name: '15', value: 0}, {name: '18', value: 0}, {name: '21', value: 0}, {name: '24', value: 0}, {name: '27', value: 0}, {name: '30', value: 0}, {name: '33', value: 0}, {name: '36', value: 0}, {name: 'row1', value: 0}],
        [{name: '2', value: 0}, {name: '5', value: 0}, {name: '8', value: 0}, {name: '11', value: 0}, {name: '14', value: 0}, {name: '17', value: 0}, {name: '20', value: 0}, {name: '23', value: 0}, {name: '26', value: 0}, {name: '29', value: 0}, {name: '32', value: 0}, {name: '35', value: 0}, {name: 'row2', value: 0}],
        [{name: '00', value: 0}, {name: '1', value: 0}, {name: '4', value: 0}, {name: '7', value: 0}, {name: '10', value: 0}, {name: '13', value: 0}, {name: '16', value: 0}, {name: '19', value: 0}, {name: '22', value: 0}, {name: '25', value: 0}, {name: '28', value: 0}, {name: '31', value: 0}, {name: '34', value: 0}, {name: 'row3', value: 0}],
        [{name: '1to12', value: 0}, {name: '13to24', value: 0}, {name: '25to36', value: 0}],
        [{name: 'even', value: 0}, {name: 'red', value: 0}, {name: 'black', value: 0}, {name: 'odd', value: 0}]
      ],
      selectedCoin: 'bronze',
      cursor: 'gameboard'
    }

    this.changeSelectedCoin = this.changeSelectedCoin.bind(this)
  }

  componentDidMount() {
    let numbers = []
    for (var i = 0; i < 36; i++) {
      numbers.push(i+1)
    }
    this.setState({numbers: numbers})
  }

  changeSelectedCoin(coin) {
    this.setState({selected: coin})
    this.changeCursor(coin)
    console.log(coin);
  }

  changeCursor(coin) {
    let cursor = `gameboard ${coin}`
    console.log(cursor);
    this.setState({cursor: cursor})
  }

  render() {
    return(
      <>
        <div>
        </div>
        <div className='board-and-wheel'>
          <div className='wheel'>
            <Wheel />
          </div>
          <div className={this.state.cursor}>
            <Board numbers={this.state.numbers}/>
          </div>
        </div>
        <div>
          <PlayerView coins={this.props.coins} grid={this.state.board} selectCoin={this.changeSelectedCoin}/>
        </div>
      </>
    )
  }
}

export default RouletteGame
