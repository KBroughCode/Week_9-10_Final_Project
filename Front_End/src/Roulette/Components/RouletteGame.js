import React, { Component } from 'react'
import Wheel from './Wheel'
import Board from './Board'
import WinnerDisplay from './WinnerDisplay'
import PlayerView from './PlayerView'
import CalculateCoins from '../Logic/CalculateCoins'
import SpinButton from './SpinButton'
import checkResult from '../Logic/WinLogic.js'

import './roulette.css'

class RouletteGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winningNumber: null,
      playerCoins: {g: 0, s: 0, b: 0},
      numbers: [],
      wheelSpinning: false,
      wheelSpinCompleted: false,
      wheelCssClasses: 'wheel-container',
      board: [
        [{name: '1to18', value: 0}, {name: '19to36', value: 0}],
        [{name: '0', value: 0}, {name: '3', value: 0}, {name: '6', value: 0}, {name: '9', value: 0}, {name: '12', value: 0}, {name: '15', value: 0}, {name: '18', value: 0}, {name: '21', value: 0}, {name: '24', value: 0}, {name: '27', value: 0}, {name: '30', value: 0}, {name: '33', value: 0}, {name: '36', value: 0}, {name: 'row1', value: 0}],
        [{name: '2', value: 0}, {name: '5', value: 0}, {name: '8', value: 0}, {name: '11', value: 0}, {name: '14', value: 0}, {name: '17', value: 0}, {name: '20', value: 0}, {name: '23', value: 0}, {name: '26', value: 0}, {name: '29', value: 0}, {name: '32', value: 0}, {name: '35', value: 0}, {name: 'row2', value: 0}],
        [{name: '00', value: 0}, {name: '1', value: 0}, {name: '4', value: 0}, {name: '7', value: 0}, {name: '10', value: 0}, {name: '13', value: 0}, {name: '16', value: 0}, {name: '19', value: 0}, {name: '22', value: 0}, {name: '25', value: 0}, {name: '28', value: 0}, {name: '31', value: 0}, {name: '34', value: 0}, {name: 'row3', value: 0}],
        [{name: '1to12', value: 0}, {name: '13to24', value: 0}, {name: '25to36', value: 0}],
        [{name: 'even', value: 0}, {name: 'red', value: 0}, {name: 'black', value: 0}, {name: 'odd', value: 0}]
      ],
      selectedCoin: {coin: 'bronze', value: 1},
      cursor: 'gameboard bronze'
    }

    this.changeSelectedCoin = this.changeSelectedCoin.bind(this)
    this.clickBox = this.clickBox.bind(this)
    this.calculateCoins = this.calculateCoins.bind(this)
    this.updateWinningNumber = this.updateWinningNumber.bind(this)
    this.updateWheelSpinning = this.updateWheelSpinning.bind(this)
    this.updateWheelSpinCompleted = this.updateWheelSpinCompleted.bind(this)
    this.startSpin = this.startSpin.bind(this)
  }

  componentDidMount() {
    let numbers = []
    for (var i = 0; i < 36; i++) {
      numbers.push(i+1)
    }
    this.setState({numbers: numbers})
    this.calculateCoins(0)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.winningNumber !== prevState.winningNumber) {
      checkResult(this.state.winningNumber, this.state.board);
    }
  }

  changeSelectedCoin(coin, value) {
    this.setState({selectedCoin: {coin: coin, value: value}})
    this.changeCursor(coin)
  }

  changeCursor(coin) {
    let cursor = `gameboard ${coin}`
    this.setState({cursor: cursor})
  }

  clickBox(name) {
    if (!this.state.wheelSpinning) {
      if (this.props.coins >= this.state.selectedCoin.value) {
        this.props.loseCoins(this.state.selectedCoin.value)
        let board = this.state.board
        board.map((row, i) => {
          row.map((column, index) => {
            if (name == column.name) {
              board[i][index].value += this.state.selectedCoin.value
            }
          })
        })
        this.setState({board: board})
        this.calculateCoins(-this.state.selectedCoin.value)
      }
      this.updateWinningNumber = this.updateWinningNumber.bind(this);
    }
  }

  updateWinningNumber(number) {
    this.setState({ winningNumber: number });
  };

  calculateCoins(amount) {
    let logic = new CalculateCoins()
    let coinsAmount = this.props.coins + amount
    let coins = logic.calculatePlayerCoins(coinsAmount)
    this.setState({playerCoins: coins})
  }

  addCoins() {
    this.props.winCoins(10000)
    console.log(this.props.coins);
    this.calculateCoins(10000)
  }

  updateWheelSpinning() {
    this.setState({ wheelSpinning: !this.state.wheelSpinning });
  };

  updateWheelSpinCompleted() {
    this.setState({ wheelSpinCompleted: !this.state.wheelSpinCompleted });
  }

  startSpin() {
    this.setState({ wheelCssClasses: this.state.wheelCssClasses+=' wheel-spinning' }, this.updateWheelSpinning);
    setTimeout(this.updateWheelSpinCompleted, 5000)
  };

  render() {
    return(
      <>
        <div>
          <div className='cheat-button' onClick={() => {this.addCoins()}}></div>
        </div>
        <div className='board-and-wheel'>
          <div className='wheel'>
            <Wheel
              updateWinningNumber={this.updateWinningNumber}
              updateWheelSpinning={this.updateWheelSpinning}
              wheelSpinning={this.state.wheelSpinning}
              wheelSpinCompleted={this.state.wheelSpinCompleted}
              wheelCssClasses={this.state.wheelCssClasses}
            />
          </div>
          <div className={this.state.cursor}>
            <Board numbers={this.state.numbers} selectedCoin={this.state.selectedCoin}
            clickBox={this.clickBox} board={this.state.board}/>
          </div>
        </div>
        <div className={this.state.selectedCoin.coin}>
          <PlayerView coins={this.state.playerCoins} money={this.props.coins} grid={this.state.board} selectCoin={this.changeSelectedCoin}/>
        </div>
        <div className="player-buttons result-output">
          <div className='bottom-bar-cell-1'>
            <SpinButton startSpin={this.startSpin} wheelSpinning={this.state.wheelSpinning} />
          </div>
          <WinnerDisplay
            winningNumber={this.state.winningNumber}
          />
        </div>

      </>
    )
  }
}

export default RouletteGame
