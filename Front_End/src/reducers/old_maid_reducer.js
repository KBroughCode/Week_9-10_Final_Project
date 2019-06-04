const oldMaidReducer = (state = {deck: []}, action) => {
  switch (action.type) {
    case 'GET_OLD_MAID_DECK':
      const newState = {...state, deck: [...action.deck.cards]}
      return newState
    case 'RETURN_OLD_MAID_DEFAULT':
      const defaultState = {deck: []}
      return defaultState
    default:
      return state
  }
}

export default oldMaidReducer;
