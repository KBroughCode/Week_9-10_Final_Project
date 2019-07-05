import React from 'react'
class CoinStack {

  getGoldStack(coin) {
    let array = []
    for (var i = 0; i < coin; i++) {
      array.push(10)
    }
    return array.map((coin) => {
      return <div className='gold-coin-stack'><img className='single-coin' src='./images/Goldcoin.png' alt='Goldcoin'/></div>
    })
  }
  getSilverStack(coin) {
    let array = []
    for (var i = 0; i < coin; i++) {
      array.push(5)
    }
    return array.map((coin) => {
      return <div className='silver-coin-stack'><img className='single-coin' src='./images/Silvercoin.png' alt='Silvercoin'/></div>
    })
  }
  getBronzeStack(coin) {
    let array = []
    for (var i = 0; i < coin; i++) {
      array.push(1)
    }
    return array.map((coin) => {
      return <div className='bronze-coin-stack'><img className='single-coin' src='./images/Bronzecoin.png' alt='Bronzecoin'/></div>
    })

  }
}
export default CoinStack
