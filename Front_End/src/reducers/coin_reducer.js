const coinReducer = (state = 100, action) => {
  switch (action.type) {
    case 'REMOVE_COINS':{
      const newState = state-action.amount
      return newState
    }
    case 'ADD_COINS':{
      const newState = state+action.amount
      return newState
    }
    default:
      return state
  }
}

export default coinReducer;
