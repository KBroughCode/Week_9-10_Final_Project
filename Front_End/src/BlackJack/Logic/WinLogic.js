const dealerHand = require('./DealerLogic');
const evaluateCards = require('./HandValueLogic');

const checkWinner = (playerArray, dealerArray, playerBust, dealerBust) => {

  const dealerHandValue = dealerHand(dealerArray).value;
  let handValue=null;
  const playerHandValueArray = evaluateCards(playerArray);
  if (playerHandValueArray.length){
    handValue=Math.max(...playerHandValueArray);
  };
  // Check new win conditions here
  const dealer5CardTrick = (dealerArray.length === 5 && !dealerBust) ? true : false;
  const dealerBlackJack = (dealerArray.length === 2 && dealerHandValue === 21) ? true : false;
  const player5CardTrick = (playerArray.length === 5 && !playerBust) ? true : false;
  const playerBlackJack = (playerArray.length === 2 && handValue === 21) ? true : false;
  if (dealer5CardTrick) {
    return {winner:'Dealer', value:dealerHandValue, extraCoinsLost:10};
  }
  if (dealerBlackJack) {
    return {winner:'Dealer', value:dealerHandValue, extraCoinsLost:0};
  }
  if (player5CardTrick && !dealer5CardTrick && !dealerBlackJack) {
    return {winner:'Player', value:handValue, coinsWon:30}; // results in 20 profit
  }
  if (playerBlackJack && !dealer5CardTrick && !dealerBlackJack) {
    return {winner:'Player', value:handValue, coinsWon:20};
  }
  const deciderSum = handValue - dealerHandValue;

  if (deciderSum > 0){
    return { winner:'Player', value:handValue, coinsWon:20};
  }else{
    return {winner:'Dealer', value:dealerHandValue, extraCoinsLost:0};
  };
};

module.exports = checkWinner;
