const leaderBoardReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_LEADER_DATA':
      return [...action.casinoData];
    case 'ADD_LEADER_DATA':
      return state;
    default:
    return state;
  };
};

export default leaderBoardReducer;
