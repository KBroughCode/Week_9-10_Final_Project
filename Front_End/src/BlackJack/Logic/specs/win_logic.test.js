const checkWinner = require('../WinLogic');

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
  const playerBustFalse = false;
  const playerBustTrue = true;
  const dealerBustFalse = false;
  const dealerBustTrue = true;

  test('player wins with higher hand', () => {
    expect(checkWinner([kingH,aceS],[eightC,fiveD],playerBustFalse,dealerBustFalse).winner).toEqual('Player');
  });

  test('dealer wins with higher hand', () => {
    expect(checkWinner([eightC,fiveD],[kingH,aceS],playerBustFalse,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('dealer wins when hands are drawn', () => {
    expect(checkWinner([kingH,aceS],[kingH,aceS],playerBustFalse,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('player wins when dealer goes bust', () => {
    expect(checkWinner([kingH,aceS],[fiveD,eightC,eightC,eightC],playerBustFalse,dealerBustTrue).winner).toEqual('Player');
  });

  test('dealer wins when player goes bust', () => {
    expect(checkWinner([fiveD,eightC,eightC,eightC],[kingH,aceS],playerBustTrue,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('dealer wins when both go bust', () => {
    expect(checkWinner([fiveD,eightC,eightC,eightC],[fiveD,eightC,eightC,eightC],playerBustTrue,dealerBustTrue).winner).toEqual('Dealer');
  });

  // new tests
  test('dealer wins when dealer has 5 card trick', () => {
    expect(checkWinner([eightC,eightC],[aceS,aceS,aceS,fiveD,fiveD],playerBustFalse,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('player wins when dealer has 5 cards but is bust', () => {
    expect(checkWinner([eightC,eightC],[fiveD,fiveD,fiveD,fiveD,fiveD],playerBustFalse,dealerBustTrue).winner).toEqual('Player');
  });

  test('dealer wins when dealer has Blackjack', () => {
    expect(checkWinner([kingH,aceS],[kingH,aceS],playerBustFalse,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('dealer wins when dealer has Blackjack even when player has 5 card trick', () => {
    expect(checkWinner([aceS,aceS,aceS,fiveD,fiveD],[kingH,aceS],playerBustFalse,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('player wins when player has 5 card trick and dealer does not have 5 cards or Blackjack', () => {
    expect(checkWinner([aceS,aceS,aceS,fiveD,fiveD],[eightC,eightC],playerBustFalse,dealerBustFalse).winner).toEqual('Player');
  });

  test('dealer wins when player has 5 cards but is bust', () => {
    expect(checkWinner([fiveD,fiveD,fiveD,fiveD,fiveD],[eightC,eightC],playerBustTrue,dealerBustFalse).winner).toEqual('Dealer');
  });

  test('player wins when player has Blackjack and dealer does not have 5 cards or Blackjack', () => {
    expect(checkWinner([kingH,aceS],[eightC,eightC],playerBustFalse,dealerBustFalse).winner).toEqual('Player');
  });

})
