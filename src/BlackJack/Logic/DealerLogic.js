const evaluateCards = require('./HandValueLogic');

const dealerHand=(cardArray) => {
  let stick=false;
  let handValue=null;
  const handValueArray = evaluateCards(cardArray)
  // console.log(`handValueArray ${handValueArray}`);
  if (handValueArray.length){
    handValue=Math.max(...handValueArray)
    // console.log(`handValue ${handValue}`);
  }
  if (handValue>16 || !handValue){
    stick=true
  }
  return {stick:stick,value:handValue}
}
// 
// console.log(dealerHand([
//                 {
//                     "image": "https://deckofcardsapi.com/static/img/KH.png",
//                     "value": "KING",
//                     "suit": "HEARTS",
//                     "code": "KH"
//                 },
//                 {
//                     "image": "https://deckofcardsapi.com/static/img/8C.png",
//                     "value": "8",
//                     "suit": "CLUBS",
//                     "code": "8C"
//                 }
//               ]
//             ));

module.exports = dealerHand;
