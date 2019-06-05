import coinReducer from '../coin_reducer'
import deepFreeze from 'deep-freeze';

describe ("Coin reducer",() => {
let initialState;

beforeEach(() => {

  let initialState =[];

})

  test('Remove 10 coins ', () => {
    let action = {
      type:'REMOVE_COINS',
      amount:10
    };
    deepFreeze(action);

    expect(coinReducer(100,action)).toBe(90);
  })

  test('Add 99 coins ', () => {
    let action = {
      type:'ADD_COINS',
      amount:99
    };
    deepFreeze(action);

    expect(coinReducer(100,action)).toBe(199);
  })

})
