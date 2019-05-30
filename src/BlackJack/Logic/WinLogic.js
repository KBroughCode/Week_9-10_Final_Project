const cardValue = require('./CardValueLogic');
const dealerHand = require('./DealerLogic');
const evaluateCards = require('./HandValueLogic')




const checkWinner = (playerArray, dealerArray) => {
  const dealerHandValue = dealerHand(dealerArray).value
  let handValue=null;
  const playerHandValueArray = evaluateCards(playerArray)
  if (playerHandValueArray.length){
    handValue=Math.max(...handValueArray)
  }

  const deciderSum = handValue - dealerHandValue


  if (deciderSum > 0){
    return { winner:'Player', value:handValue}
      console.log('player wins');
    }else{
      return {winner:'Dealer', value:dealerHandValue}
        console.log('dealer wins');
    }

const playerCards =[
  {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH"
  },
  {
    image: "https://deckofcardsapi.com/static/img/AS.png",
    value: "ACE",
    suit: "SPADES",
    code: "AS"
  }
]

const dealerCards = [
  {
      image: "https://deckofcardsapi.com/static/img/KH.png",
      value: "KING",
      suit: "HEARTS",
      code: "KH"
    },
  {
      image: "https://deckofcardsapi.com/static/img/AS.png",
      value: "ACE",
      suit: "SPADES",
      code: "AS"
    }
]

    // const eightC = {
    //   image: "https://deckofcardsapi.com/static/img/8C.png",
    //   value: "8",
    //   suit: "CLUBS",
    //   code: "8C"
    // }
    // const fiveD = {
    //   image: "https://deckofcardsapi.com/static/img/5D.png",
    //   value: "5",
    //   suit: "DIAMONDS",
    //   code: "5D"
    // }
    // const fourH = {
    //   image: "https://deckofcardsapi.com/static/img/4H.png",
    //   value: "4",
    //   suit: "HEARTS",
    //   code: "4H"
    // }


    console.log(checkWinner(playerCards, dealerCards));

}
