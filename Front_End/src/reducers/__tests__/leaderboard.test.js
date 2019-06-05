import leaderBoardReducer from '../leaderboard_reducer'
import deepFreeze from 'deep-freeze';

describe ("leaderboard reducer",() => {
let initialState;

beforeEach(() => {

  let initialState =[];

})

  test('returns initial value', () => {
    let initialState =[];
    deepFreeze(initialState);
    let action = {type:''};
    expect(leaderBoardReducer(initialState,action)).toEqual([]);
  })

  test('returns Get Leader Data value', () => {
    let getCasinoData = [
  {
    _id: '5cf67455f1ece27f5ab64c03',
    name: 'Julius',
    score: 90
  },
  {
    _id: '5cf4dd6342a4f8009581fd27',
    name: 'Test 21',
    score: 21
  },
  {
    _id: '5cf4dd5142a4f8009581fd26',
    name: 'Test 20',
    score: 20
  }];
    deepFreeze(getCasinoData);
    let action = {
      type:'GET_LEADER_DATA',
      casinoData:getCasinoData
    };

    expect(leaderBoardReducer([],action)).toEqual(getCasinoData);
  })

  test(' Post Leader Data value', () => {
    let action = {type:''};
    leaderBoardReducer(initialState,action);

    let addCasinoData = [
    {
      _id: 'testId',
      name: 'Test Add',
      score: 10
    }
  ];

    action = {
      type:'ADD_LEADER_DATA',
      casinoData:addCasinoData
    };


    deepFreeze(addCasinoData);
    expect(leaderBoardReducer(addCasinoData,action)).toEqual(addCasinoData);
  })



})
