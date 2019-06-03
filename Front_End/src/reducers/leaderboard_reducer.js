const leaderBoardReducer = (state=[], action) => {
switch (action.type) {
  case 'ADD_LEADER_DATA':
    return [...state,...action.casinoData];
  case 'GET_LEADER_DATA':
    return state;
  default:
    return state;
}

}

export default leaderBoardReducer;
