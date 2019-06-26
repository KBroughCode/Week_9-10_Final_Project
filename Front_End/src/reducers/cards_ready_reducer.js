const cardsReadyReducer = (state = true, action) => {
  switch (action.type) {
    case 'CARDS_NOT_READY':{
      const newState = false;
      return newState;
    }
    case 'CARDS_READY':{
      const newState = true;
      return newState;
    }
    case 'CHECK_CARDS_READY':{
      return state;
    }
    default:
      return state;
  };
};

export default cardsReadyReducer;
