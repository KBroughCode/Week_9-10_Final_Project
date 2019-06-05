const dealerHand = require('./DealerLogic');
const evaluateCards = require('./HandValueLogic');

const checkWinner = (playerArray, dealerArray) => {
  const dealerHandValue = dealerHand(dealerArray).value;
  let handValue=null;
  const playerHandValueArray = evaluateCards(playerArray);
  if (playerHandValueArray.length){
    handValue=Math.max(...playerHandValueArray);
  };

  const deciderSum = handValue - dealerHandValue;

  if (deciderSum > 0){
    return { winner:'Player', value:handValue};
    }else{
      return {winner:'Dealer', value:dealerHandValue};
    };
};

module.exports = checkWinner;
