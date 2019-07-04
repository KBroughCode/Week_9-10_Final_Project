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

// ************************** INSIDE BETS **************************************
// ************************** STRAIGHT / SINGLE ********************************
  test('player wins bet on single # when it equals the winning #', () => {
    winningNumber = '3';
    board[1][1].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(180);
  });

  test('player loses bet on single # when it NOT equals the winning #', () => {
    winningNumber = '33';
    board[1][1].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on single # when winning # is zero', () => {
    winningNumber = '0';
    board[1][1].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on single # when winning # is double zero', () => {
    winningNumber = '00';
    board[1][1].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on zero when it equals the winning #', () => {
    winningNumber = '0';
    board[1][0].value = 10;
    expect(checkResult(winningNumber, board)).toEqual(360);
  });

  test('player loses bet on zero when it NOT equals the winning #', () => {
    winningNumber = '00';
    board[1][0].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on double zero when it equals the winning #', () => {
    winningNumber = '00';
    board[3][0].value = 11;
    expect(checkResult(winningNumber, board)).toEqual(396);
  });

  test('player loses bet on dbl zero when it NOT equals the winning #', () => {
    winningNumber = '1';
    board[3][0].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** OUTSIDE BETS *************************************
// ************************** RED / BLACK **************************************
  test('player wins bet on red when winning number is red', () => {
    winningNumber = '7';
    board[5][1].value = 1;
    expect(checkResult(winningNumber, board)).toEqual(2);
  });

  test('player loses bet on red when winning number is black', () => {
    winningNumber = '2';
    board[5][1].value = 1;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on red when winning number is zero', () => {
    winningNumber = '0';
    board[5][1].value = 1;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on red when winning number is double zero', () => {
    winningNumber = '00';
    board[5][1].value = 1;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on black when winning number is black', () => {
    winningNumber = '15';
    board[5][2].value = 11;
    expect(checkResult(winningNumber, board)).toEqual(22);
  });

  test('player loses bet on black when winning number is red', () => {
    winningNumber = '32';
    board[5][2].value = 11;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on black when winning number is zero', () => {
    winningNumber = '0';
    board[5][2].value = 11;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on black when winning number is double zero', () => {
    winningNumber = '00';
    board[5][2].value = 11;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** EVEN / ODD ***************************************
  test('player wins bet on evens when winning number is evens', () => {
    winningNumber = '22';
    board[5][0].value = 15;
    expect(checkResult(winningNumber, board)).toEqual(30);
  });

  test('player loses bet on evens when winning number is odds', () => {
    winningNumber = '21';
    board[5][0].value = 15;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on evens when winning number is zero', () => {
    winningNumber = '0';
    board[5][0].value = 15;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on evens when winning number is double zero', () => {
    winningNumber = '00';
    board[5][0].value = 15;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on odds when winning number is odds', () => {
    winningNumber = '11';
    board[5][3].value = 100;
    expect(checkResult(winningNumber, board)).toEqual(200);
  });

  test('player loses bet on odds when winning number is evens', () => {
    winningNumber = '12';
    board[5][3].value = 100;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on odds when winning number is zero', () => {
    winningNumber = '0';
    board[5][3].value = 100;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on odds when winning number is double zero', () => {
    winningNumber = '00';
    board[5][3].value = 100;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** HIGH / LOW ***************************************
  test('player wins bet on low when winning number is low', () => {
    winningNumber = '9';
    board[0][0].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(10);
  });

  test('player loses bet on low when winning number is high', () => {
    winningNumber = '29';
    board[0][0].value = 7;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on low when winning number is zero', () => {
    winningNumber = '0';
    board[0][0].value = 17;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on low when winning number is double zero', () => {
    winningNumber = '00';
    board[0][0].value = 117;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on high when winning number is high', () => {
    winningNumber = '30';
    board[0][1].value = 111;
    expect(checkResult(winningNumber, board)).toEqual(222);
  });

  test('player loses bet on high when winning number is low', () => {
    winningNumber = '8';
    board[0][1].value = 111;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on high when winning number is zero', () => {
    winningNumber = '0';
    board[0][1].value = 111;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on high when winning number is double zero', () => {
    winningNumber = '00';
    board[0][1].value = 111;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** DOZENS *******************************************
  test('player wins bet on 1st doz when winning number is in 1st doz', () => {
    winningNumber = '6';
    board[4][0].value = 101;
    expect(checkResult(winningNumber, board)).toEqual(303);
  });

  test('player loses bet on 1st doz when winning number is in 2nd/3rd', () => {
    winningNumber = '18';
    board[4][0].value = 101;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 1st doz when winning number is zero', () => {
    winningNumber = '0';
    board[4][0].value = 101;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 1st doz when winning number is double zero', () => {
    winningNumber = '00';
    board[4][0].value = 101;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on 2nd doz when winning number is in 2nd doz', () => {
    winningNumber = '14';
    board[4][1].value = 1000;
    expect(checkResult(winningNumber, board)).toEqual(3000);
  });

  test('player loses bet on 2nd doz when winning number is in 1st/3rd', () => {
    winningNumber = '1';
    board[4][1].value = 1000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 2nd doz when winning number is zero', () => {
    winningNumber = '0';
    board[4][1].value = 1000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 2nd doz when winning number is double zero', () => {
    winningNumber = '00';
    board[4][1].value = 1000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on 3rd doz when winning number is in 3rd doz', () => {
    winningNumber = '28';
    board[4][2].value = 2000;
    expect(checkResult(winningNumber, board)).toEqual(6000);
  });

  test('player loses bet on 3rd doz when winning number is in 1st/2nd', () => {
    winningNumber = '20';
    board[4][2].value = 2000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 3rd doz when winning number is zero', () => {
    winningNumber = '0';
    board[4][2].value = 2000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 3rd doz when winning number is double zero', () => {
    winningNumber = '00';
    board[4][2].value = 2000;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** COLUMNS ******************************************
  test('player wins bet on 1st row when winning # is in 1st row', () => {
    winningNumber = '36';
    board[1][13].value = 3;
    expect(checkResult(winningNumber, board)).toEqual(9);
  });

  test('player loses bet on 1st row when winning # is in 2nd/3rd', () => {
    winningNumber = '35';
    board[1][13].value = 3;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 1st row when winning # is zero', () => {
    winningNumber = '0';
    board[1][13].value = 3;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 1st row when winning # is double zero', () => {
    winningNumber = '00';
    board[1][13].value = 3;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on 2nd row when winning # is in 2nd row', () => {
    winningNumber = '32';
    board[2][12].value = 9;
    expect(checkResult(winningNumber, board)).toEqual(27);
  });

  test('player loses bet on 2nd row when winning # is in 1st/3rd', () => {
    winningNumber = '31';
    board[2][12].value = 9;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 2nd row when winning # is zero', () => {
    winningNumber = '0';
    board[2][12].value = 9;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 2nd row when winning # is double zero', () => {
    winningNumber = '00';
    board[2][12].value = 9;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player wins bet on 3rd row when winning # is in 3rd row', () => {
    winningNumber = '28';
    board[3][13].value = 7;
    expect(checkResult(winningNumber, board)).toEqual(21);
  });

  test('player loses bet on 3rd row when winning # is in 1st/2nd', () => {
    winningNumber = '29';
    board[3][13].value = 7;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 3rd row when winning # is zero', () => {
    winningNumber = '0';
    board[3][13].value = 7;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

  test('player loses bet on 3rd row when winning # is double zero', () => {
    winningNumber = '00';
    board[3][13].value = 7;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

// ************************** MULTIPLE BETS ************************************
  test('2 wins from 2 bets: single28, row3', () => {
    winningNumber = '28';
    board[3][10].value = 1;
    board[3][13].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(51);
  });

  test('1 win from 2 bets: single28, row1', () => {
    winningNumber = '28';
    board[3][10].value = 1;
    board[1][13].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(36);
  });

  test('no win from 2 bets: single28, row1', () => {
    winningNumber = '29';
    board[3][10].value = 1;
    board[1][13].value = 5;
    expect(checkResult(winningNumber, board)).toEqual(0);
  });

})
