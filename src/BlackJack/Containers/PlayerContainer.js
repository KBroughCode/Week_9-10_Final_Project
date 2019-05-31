import { connect } from 'react-redux';
import Player from '../Components/Player';

const mapStateToProps = (state) => {
  return {
    deck: state.deck.deck,
    cards: state.deck.player,
    dealer: state.deck.dealer
  };
};

const mapDispatchToProps = (dispatch) => ({
  shufflePlayer() {
    dispatch({
      type: 'SHUFFLE_PLAYER'
    })
  },
  twistPlayer() {
    dispatch({
      type: 'TWIST_PLAYER'
    })
  },
  declareWinner(winner) {
    dispatch({
      type:'WINNER_DETERMINED',
      winner
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);
