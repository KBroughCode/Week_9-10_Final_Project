const evaluateCards = require('./HandValueLogic');

const dealerHand=(cardArray) => {
  let stick=false;
  let handValue=null;
  const handValueArray = evaluateCards(cardArray);
  if (handValueArray.length){
    handValue=Math.max(...handValueArray);
  };
  if (handValue>16 || !handValue){
    stick=true;
  };
  return {stick:stick,value:handValue};
};

module.exports = dealerHand;
