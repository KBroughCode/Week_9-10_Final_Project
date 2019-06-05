const snapReducer = (state = {deck: [], pile: []}, action) => {
  switch (action.type) {
    case 'GET_SNAP_DECK':
      const newState = {...state, deck: [...action.deck.cards]};
      return newState;
    case 'ADD_TO_PILE':
      const moveState = {
        ...state,
        deck: state.deck.slice(0, state.deck.length - 1),
        pile: [state.deck.slice(-1), ...state.pile]
      };
      return moveState;
    case 'RETURN_SNAP_DEFAULT':
      const defaultState = {deck: [], pile: []};
      return defaultState;
    default:
      return state;
  };
};

export default snapReducer;
