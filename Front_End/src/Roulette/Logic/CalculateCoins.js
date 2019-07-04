class CalculateCoins {
  calculatePlayerCoins(money) {
    let coins= {g: 0, s: 0, b: 0}
    if (money >= 5) {
      money -= 5;
      coins.b +=5;
      if (money >= 25) {
        money -= 25
        coins.s +=5
        if (money >= 10) {
          coins.g += (Math.floor(money/10))
          coins.s += (Math.floor((money%10)/5))
          coins.b += (money%10)%5
        }
      } else {
        coins.s += (Math.floor(money/5))
        coins.b += (money%5)
        money = 0
      }
    } else {
      coins.b = money
      money = 0
    }
    return coins
  }

  calculateBoardCoins(money) {
    if (money < 100) {
      let coins = {g: 0, s: 0, b: 0}
      coins.g += (Math.floor(money/10))
      coins.s += (Math.floor((money%10)/5))
      coins.b += (money%10)%5
      return coins
    }
    return {g:9,s:1,b:5}
  }

}


module.exports = CalculateCoins;
