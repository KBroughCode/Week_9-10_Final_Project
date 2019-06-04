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
    case 'SET_COINS':{
      return 100
    }
    default:
      return state
  }
}

export default coinReducer;
