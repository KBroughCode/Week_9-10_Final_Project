const dealerHand = require('../DealerLogic');

describe(`the dealer's actions`, () => {
  const kingH = {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH"
  }
  const aceS = {
    image: "https://deckofcardsapi.com/static/img/AS.png",
    value: "ACE",
    suit: "SPADES",
    code: "AS"
  }
  const eightC = {
    image: "https://deckofcardsapi.com/static/img/8C.png",
    value: "8",
    suit: "CLUBS",
    code: "8C"
  }
  const fiveD = {
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: "5",
    suit: "DIAMONDS",
    code: "5D"
  }
  const fourH = {
    image: "https://deckofcardsapi.com/static/img/4H.png",
    value: "4",
    suit: "HEARTS",
    code: "4H"
  }


  test('a dealer should not stick if they have a handvalue less than 17', () => {
    expect(dealerHand([eightC,fiveD])).toEqual({stick:false,value:13});
  });
  test('a dealer should stick if they have a handvalue of 17', () => {
    expect(dealerHand([eightC,fiveD,fourH])).toEqual({stick:true,value:17});
  });
  test('a dealer should stick if they have a handvalue more than 17', () => {
    expect(dealerHand([kingH,eightC])).toEqual({stick:true,value:18});
  });
  test('a dealer should stick if they have a hand of 21', () => {
    expect(dealerHand([kingH,aceS])).toEqual({stick:true,value:21});
  });
  test('a dealer should =1 if it prevents the dealer from going bust', () => {
    expect(dealerHand([kingH,aceS,eightC])).toEqual({stick:true,value:19});
  });
  test('a dealer should stick if they go bust', () => {
    expect(dealerHand([kingH,fiveD,eightC])).toEqual({stick:true,value:null});
  });
  test('a dealer has no hand value if they are bust', () => {
    expect(dealerHand([kingH,fourH,eightC])).toEqual({stick:true,value:null});
  });

})
