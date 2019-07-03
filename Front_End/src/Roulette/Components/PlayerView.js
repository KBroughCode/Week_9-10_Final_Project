import React from 'react'
import './playerView.css'
import CalculateCoins from '../Logic/CalculateCoins'

const PlayerView = (props) => {

  const calculateCoins = () => {
    let logic = new CalculateCoins()
    let coins = logic.calculateCoins(props.coins)
  }

  const showGrid = () => {
    console.log(props.grid);
  }

  return (
    <>
      <div className='player-tray'>
        <div>

          <div className='coin-container'>
            <div><img onClick={()=>{props.selectCoin('bronze', 1)}} className='coin-front' src='./images/BronzeFront.png' alt='BronzeCoin'/></div>
            <div><img onClick={()=>{props.selectCoin('silver', 5)}} className='coin-front' src='./images/SilverFront.png' alt='SilverCoin'/></div>
            <div><img onClick={()=>{props.selectCoin('gold', 10)}} className='coin-front' src='./images/GoldFront.png' alt='GoldCoin'/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerView
