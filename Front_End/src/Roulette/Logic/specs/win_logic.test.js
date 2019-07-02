const checkResult = require('../WinLogic');

describe('setupForJest', () => {
  const anObject = {
    key: "value",
  }
  const aVariable = true;

  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses with bet on red when spin result is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on black when spin result is black', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses with bet on black when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on evens when spin result is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses with bet on evens when spin result is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on odds when spin result is odds', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses with bet on odds when spin result is evens', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on low 12 when spin result is <= 12', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player loses with bet on low 12 when spin result is > 12', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });




  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });

  test('player wins with bet on red when spin result is red', () => {
    expect(checkResult(arguments).result).toEqual('something');
  });


})
