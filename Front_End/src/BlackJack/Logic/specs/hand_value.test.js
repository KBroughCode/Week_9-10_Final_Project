const evaluateCards = require('../HandValueLogic');

describe('a hand of cards', () => {
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

  test('a hand of no cards has a value of 0', () => {
    expect(evaluateCards([])).toEqual([0]);
  });
  test('a hand of 1 card has a value of that card', () => {
    expect(evaluateCards([eightC])).toEqual([8]);
  });
  test('a hand of 2 cards has a value of the sum total', () => {
    expect(evaluateCards([eightC,fiveD])).toEqual([13]);
  });
  test('an ACE can be high or low', () => {
    expect(evaluateCards([aceS])).toEqual([1,11]);
  });
  test('an ACE cannot be high if it woukd take the hand over 21', () => {
    expect(evaluateCards([aceS,kingH])).toEqual([11,21]);
  });

  test('a hand over 21 has no values', () => {
    expect(evaluateCards([kingH, eightC, fiveD])).toEqual([]);
  });
})
