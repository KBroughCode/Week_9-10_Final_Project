const cardReducer = (state = {deck: [], player: [], dealer: [], winner: {}}, action) => {
  switch (action.type) {
    case 'GET_DECK':
      const newState = {...state, deck: [...action.deck.cards]}
      return newState
    case 'SHUFFLE_DEALER':
      const dealerHand = {
        ...state,
        deck: state.deck.slice(0, state.deck.length - 2),
        dealer: state.deck.slice(-2)
      }
      return dealerHand;
    case 'TWIST_DEALER':
      const newDealerHand = {
        ...state,
        deck: state.deck.slice(0, state.deck.length - 1),
        dealer: [...state.dealer, ...state.deck.slice(-1)]
      }
      return newDealerHand;
    case 'SHUFFLE_PLAYER':
      const playerHand = {
        ...state,
        deck: state.deck.slice(0, state.deck.length - 2),
        player: state.deck.slice(-2)
      }
      return playerHand;
    case 'TWIST_PLAYER':
      const newPlayerHand = {
        ...state,
        deck: state.deck.slice(0, state.deck.length - 1),
        player: [...state.player, ...state.deck.slice(-1)]
      }
      return newPlayerHand;
    default:
      return state
  }
}

export default cardReducer;
