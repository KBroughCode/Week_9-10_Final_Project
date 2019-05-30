const evaluateCards = require('./HandValueLogic');

const dealerHand=(cardArray) => {
  let stick=false;
  let handValue=null;
  const handValueArray = evaluateCards(cardArray)
  console.log(`handValueArray ${handValueArray}`);
  if (handValueArray.length){
    handValue=Math.max(...handValueArray)
    console.log(`handValue ${handValue}`);
  }
  if (handValue>16 || !handValue){
    stick=true
  }
  return {stick:stick,value:handValue}
}

console.log(dealerHand(['5','KING','QUEEN']));

module.exports = dealerHand;
