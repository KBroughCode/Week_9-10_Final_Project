const oldMaidReducer = (state = {deck: [], one: [], two: [], three: [], four: [], pile: []}, action) => {
  switch (action.type) {
    case 'GET_OLD_MAID_DECK':
      const newState = {...state, deck: [...action.deck.cards]}
      return newState
    case 'DEAL_OLD_MAID_HANDS':
      const dealState = {
        ...state,
        deck: [],
        one: [...state.deck.slice(0, 13)],
        two: [...state.deck.slice(13, 25)],
        three: [...state.deck.slice(25, 37)],
        four: [...state.deck.slice(37)]
      }
      return dealState
    case 'ADD_PAIR_TO_PILE':
      const pairPile = {
        ...state,
        [action.player]: [
          ...state[action.player].slice(0, action.cardOne.index),
          ...state[action.player].slice(action.cardOne.index+1, action.cardTwo.index),
          ...state[action.player].slice(action.cardTwo.index+1)
        ],
        pile: [
          ...state.pile,
          action.cardOne,
          action.cardTwo
        ]
      }
      return pairPile
    case 'PICK_CARD':
      const pickDeck = {
        ...state,
        [action.receiver]: [
          ...state[action.receiver], card
        ],
        [action.picked]: [
          ...state[action.picked].slice(0, action.card.index),
          ...state[action.picked].slice(action.card.index+1)
        ]
      }
      return pickDeck
    case 'RETURN_OLD_MAID_DEFAULT':
      const defaultState = {deck: []}
      return defaultState
    default:
      return state
  }
}

export default oldMaidReducer;
