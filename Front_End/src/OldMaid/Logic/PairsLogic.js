class PairsLogic {

  removePairs(hand) {
    let cardsArray = []
    hand.forEach((card, index, array) => {
      let cardCopies = [index, 0, {}]
      let pair = array.forEach((c, i) => {
        if (c.value === card.value) {
          cardCopies[1]++
          cardCopies[2] = card
        }
      })
      if (cardCopies[1] === 2) {
      }
      cardsArray.push(cardCopies);
    })
    let reducedHand = []
    let tripleCards = []
    cardsArray.forEach((copy) => {
      if (copy[1] === 1) {
        reducedHand.push(copy[2])
      } else if (copy[1] === 3) {
        if (tripleCards.length === 2) {
          reducedHand.push(tripleCards[0][2])
          tripleCards = []
        } else {
          tripleCards.push(copy)
        }
      }
    })
    return reducedHand;
  }

}
module.exports = PairsLogic;
