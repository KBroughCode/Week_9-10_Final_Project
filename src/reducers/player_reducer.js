const playerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHUFFLE_DECK':
      const newState = [...action.cards.cards]
      return newState
    case 'TWIST_PLAYER':
      const twistState = [...state, ...action.card.cards]
      return twistState
    default:
      return state
  }
}

export default playerReducer;
