const checkResult = require('../WinLogic');

describe('setupForJest', () => {
  const anObject = {
    key: "value",
  }
  const aVariable = true;

// INSIDE BETS
// STRAIGHT / SINGLE
  test('player wins bet on single # when it equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on single # when it NOT equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on zero when it equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on zero when it NOT equals the winning #', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// OUTSIDE BETS
// RED / BLACK
  test('player wins bet on red when winning number is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on red when winning number is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on red when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on black when winning number is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on black when winning number is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on black when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// EVEN / ODD
  test('player wins bet on evens when winning number is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on evens when winning number is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on evens when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on odds when winning number is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on odds when winning number is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on odds when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// HIGH / LOW
  test('player wins bet on low when winning number is low', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on low when winning number is high', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on low when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on high when winning number is high', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on high when winning number is low', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on high when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// DOZENS
  test('player wins bet on 1st doz when winning number is in 1st doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 1st doz when winning number is in 2nd/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 1st doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on 2nd doz when winning number is in 2nd doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 2nd doz when winning number is in 1st/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 2nd doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on 3rd doz when winning number is in 3rd doz', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 3rd doz when winning number is in 1st/2nd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 3rd doz when winning number is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

// COLUMNS
  test('player wins bet on 1st column when winning # is in 1st column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 1st column when winning # is in 2nd/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 1st column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on 2nd column when winning # is in 2nd column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 2nd column when winning # is in 1st/3rd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 2nd column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins bet on 3rd column when winning # is in 3rd column', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 3rd column when winning # is in 1st/2nd', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses bet on 3rd column when winning # is zero', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

})
