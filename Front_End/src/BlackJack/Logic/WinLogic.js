const dealerHand = require('./DealerLogic');
const evaluateCards = require('./HandValueLogic');

const checkWinner = (playerArray, dealerArray) => {

  const dealerHandValue = dealerHand(dealerArray).value;
  let handValue=null;
  let coinsChangingHands=20;
  const playerHandValueArray = evaluateCards(playerArray);
  if (playerHandValueArray.length){
    handValue=Math.max(...playerHandValueArray);
  };
  // Check new win conditions here
  const dealer5CardTrick = (dealerArray.length === 5) ? true : false;
  const dealerBlackJack = (dealerArray.length === 2 && dealerHandValue === 21) ? true : false;
  const player5CardTrick = (playerArray.length === 5) ? true : false;
  const playerBlackJack = (playerArray.length === 2 && handValue === 21) ? true : false;
  if (dealer5CardTrick) {
    coinsChangingHands=40;
    return {winner:'Dealer', value:dealerHandValue};
  }
  if (dealerBlackJack) {
    return {winner:'Dealer', value:dealerHandValue};
  }
  if (player5CardTrick && !dealer5CardTrick && !dealerBlackJack) {
    coinsChangingHands=40;
    return {winner:'Player', value:handValue};
  }
  if (playerBlackJack && !dealer5CardTrick && !dealerBlackJack) {
    return {winner:'Player', value:handValue};
  }
  const deciderSum = handValue - dealerHandValue;

  if (deciderSum > 0){
    return { winner:'Player', value:handValue, coinsWon:coinsChangingHands};
  }else{
    return {winner:'Dealer', value:dealerHandValue, coinsWon:coinsChangingHands};
  };
};

module.exports = checkWinner;
