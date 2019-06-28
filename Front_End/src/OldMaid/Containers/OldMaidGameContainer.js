import { connect } from 'react-redux';
import OldMaidGame from '../Components/OldMaidGame';

const mapStateToProps = (state) => {
  return {
    deck: state.oldMaid.deck,
    one: state.oldMaid.one,
    two: state.oldMaid.two,
    three: state.oldMaid.three,
    four: state.oldMaid.four,
    pile: state.oldMaid.pile
  };
};

const mapDispatchToProps = (dispatch) => ({
  dealHands() {
    dispatch({
      type: 'DEAL_OLD_MAID_HANDS'
    })
  },
  addPairToPile(cardOne, cardTwo, player) {
    dispatch({
      type: 'ADD_PAIR_TO_PILE',
      cardOne,
      cardTwo,
      player
    })
  },
  pickCard(card, receiver, picked){
    dispatch({
      type: 'PICK_CARD',
      card,
      receiver,
      picked
    })
  },
  updateCpuHand(hand, player){
    dispatch({
      type: 'UPDATE_CPU',
      hand,
      player
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_OLD_MAID_DEFAULT'
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OldMaidGame);
