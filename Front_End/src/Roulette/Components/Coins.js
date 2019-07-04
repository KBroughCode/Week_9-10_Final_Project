import React from 'react'
import CoinStack from '../Logic/CoinStack'
import CalculateCoins from '../Logic/CalculateCoins'

const Coins = (props) => {

  const coins = (name) => {

    let board = props.board
    let money;
    board.map((row, i) => {
      row.map((column, index) => {
        if (name == column.name) {
          money = column.value
        }
      })
    })
    let coinsLogic = new CalculateCoins()
    let coins = coinsLogic.calculateBoardCoins(money)

    let logic = new CoinStack()
    if (money < 100) {
      return(
        <div className={props.containerClass}>
          <div className='bronze-stack'>
            {logic.getBronzeStack(coins.b)}
          </div>
          <div className='silver-stack'>
            {logic.getSilverStack(coins.s)}
          </div>
          <div className='gold-stack'>
            {logic.getGoldStack(coins.g)}
          </div>
        </div>
      )
    }else {
      return(
        <div className={props.containerClass}>
          <div className='over100'>₡{money}</div>
          <div className='bronze-stack'>
            {logic.getBronzeStack(coins.b)}
          </div>
          <div className='silver-stack'>
            {logic.getSilverStack(coins.s)}
          </div>
          <div className='gold-stack'>
            {logic.getGoldStack(coins.g)}
          </div>
        </div>
      )
    }


  }

  return(
    <div>{coins(props.box)}</div>
  )
}
export default Coins
