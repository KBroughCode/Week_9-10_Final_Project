const checkResult = require('../WinLogic');

describe('setupForJest', () => {
  let winningNumber = null;
  let emptyBoard = [
    [{name: '1to18', value: 0}, {name: '19to36', value: 0}],
    [{name: '0', value: 0}, {name: '3', value: 0}, {name: '6', value: 0}, {name: '9', value: 0}, {name: '12', value: 0}, {name: '15', value: 0}, {name: '18', value: 0}, {name: '21', value: 0}, {name: '24', value: 0}, {name: '27', value: 0}, {name: '30', value: 0}, {name: '33', value: 0}, {name: '36', value: 0}, {name: 'row1', value: 0}],
    [{name: '2', value: 0}, {name: '5', value: 0}, {name: '8', value: 0}, {name: '11', value: 0}, {name: '14', value: 0}, {name: '17', value: 0}, {name: '20', value: 0}, {name: '23', value: 0}, {name: '26', value: 0}, {name: '29', value: 0}, {name: '32', value: 0}, {name: '35', value: 0}, {name: 'row2', value: 0}],
    [{name: '00', value: 0}, {name: '1', value: 0}, {name: '4', value: 0}, {name: '7', value: 0}, {name: '10', value: 0}, {name: '13', value: 0}, {name: '16', value: 0}, {name: '19', value: 0}, {name: '22', value: 0}, {name: '25', value: 0}, {name: '28', value: 0}, {name: '31', value: 0}, {name: '34', value: 0}, {name: 'row3', value: 0}],
    [{name: '1to12', value: 0}, {name: '13to24', value: 0}, {name: '25to36', value: 0}],
    [{name: 'even', value: 0}, {name: 'red', value: 0}, {name: 'black', value: 0}, {name: 'odd', value: 0}]
  ];
  let board = [];

  beforeEach(() => {
    board = [...emptyBoard];
    for (let section of board) {
      for (let bet of section) {
        bet.value = 0
      }
    }
    winningNumber = null;
  });

// INSIDE BETS
// STRAIGHT / SINGLE
  test('player wins bet on single # when it equals the winning #', () => {
    winningNumber = '3';
    board[1][1].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(180);
  });

  xtest('player loses bet on single # when it NOT equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on zero when it equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on zero when it NOT equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// OUTSIDE BETS
// RED / BLACK
  xtest('player wins bet on red when winning number is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on red when winning number is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on red when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on black when winning number is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on black when winning number is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on black when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// EVEN / ODD
  xtest('player wins bet on evens when winning number is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on evens when winning number is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on evens when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on odds when winning number is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on odds when winning number is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on odds when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// HIGH / LOW
  test('player wins bet on low when winning number is low', () => {
    winningNumber = '9';
    board[0][0].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(10);
  });

  xtest('player loses bet on low when winning number is high', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on low when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on high when winning number is high', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on high when winning number is low', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on high when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// DOZENS
  xtest('player wins bet on 1st doz when winning number is in 1st doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 1st doz when winning number is in 2nd/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 1st doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on 2nd doz when winning number is in 2nd doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 2nd doz when winning number is in 1st/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 2nd doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on 3rd doz when winning number is in 3rd doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 3rd doz when winning number is in 1st/2nd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 3rd doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// COLUMNS
  xtest('player wins bet on 1st column when winning # is in 1st column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 1st column when winning # is in 2nd/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 1st column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on 2nd column when winning # is in 2nd column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 2nd column when winning # is in 1st/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 2nd column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player wins bet on 3rd column when winning # is in 3rd column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 3rd column when winning # is in 1st/2nd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  xtest('player loses bet on 3rd column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

})
