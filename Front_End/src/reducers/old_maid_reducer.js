const oldMaidReducer = (state = {deck: [], one: [], two: [], three: [], four: []}, action) => {
  switch (action.type) {
    case 'GET_OLD_MAID_DECK':
      const newState = {...state, deck: [...action.deck.cards]};
      return newState;
    case 'DEAL_OLD_MAID_HANDS':
      const dealState = {
        ...state,
        deck: [],
        one: [...state.deck.slice(0, 13)],
        two: [...state.deck.slice(13, 25)],
        three: [...state.deck.slice(25, 37)],
        four: [...state.deck.slice(37)]
      };
      return dealState;
    case 'RETURN_OLD_MAID_DEFAULT':
      const defaultState = {deck: []};
      return defaultState;
    default:
      return state;
  };
};

export default oldMaidReducer;
