const OldMaidLogic = require('../OldMaidLogic.js');

describe('a hand of cards', () => {
  const logic = new OldMaidLogic();

  const kingH = {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH"
  }
  const kingHTwo = {
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
  const aceH = {
    image: "https://deckofcardsapi.com/static/img/8C.png",
    value: "ACE",
    suit: "HEARTS",
    code: "8C"
  }
  const fiveD = {
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: "5",
    suit: "DIAMONDS",
    code: "5D"
  }
  const fiveC = {
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: "5",
    suit: "CLUBS",
    code: "5D"
  }
  const fiveCTwo = {
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: "5",
    suit: "CLUBS",
    code: "5D"
  }

  test('returns not pair if two of the same face card are picked', () => {
    expect(logic.checkPair(kingH, kingHTwo)).toEqual(false);
  });


})
