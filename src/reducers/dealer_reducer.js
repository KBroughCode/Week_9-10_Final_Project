const dealerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHUFFLE_DEALER':
    const newState = [...action.cards.cards]
      return newState
    case 'TWIST_DEALER':
      const twistState = [...state, ...action.card.cards]
      return twistState
    default:
      return state
  }
}

export default dealerReducer;
