class OldMaidLogic {

  checkPair(cardOne, cardTwo){
    if(!cardOne || !cardTwo){
      return false
    }else{
      if(cardOne.suit !== cardTwo.suit && cardOne.value === cardTwo.value) {
        return true
      }
      return false
    };
  };

};
module.exports = OldMaidLogic;
