import React from 'react'
import './playerView.css'
import CoinStack from '../Logic/CoinStack'

const PlayerView = (props) => {


  const coinStack = () => {
    let logic = new CoinStack()
    return(
      <div className='coin-stack-cont'>
        <div className='bronze-stack'>
          {logic.getBronzeStack(props.coins.b)}
        </div>
        <div className='silver-stack'>
          {logic.getSilverStack(props.coins.s)}
        </div>
        <div className='gold-stack'>
          {logic.getGoldStack(props.coins.g)}
        </div>
      </div>
    )
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
          <div>
            {coinStack()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerView
