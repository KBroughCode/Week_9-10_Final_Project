const cardReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_DECK':
      return action.deck.deck_id
    default:
      return state
  }
}

export default cardReducer;
