const cardValue = require('../cardValueLogic');

describe('a card', () => {

  test(`'ACE' should return 1`, () => {
    expect(cardValue.ACE).toBe(1);
  });
  test(`face cards should return 10`,() => {
    expect(cardValue.JACK).toBe(10);
    expect(cardValue.QUEEN).toBe(10);
    expect(cardValue.KING).toBe(10);
  })
  test(`numbered cards should receive the correct number`,() => {
    expect(cardValue['5']).toBe(5);
    expect(typeof(cardValue.QUEEN)).toBe('number');
  })

})
