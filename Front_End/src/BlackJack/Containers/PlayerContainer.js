import { connect } from 'react-redux';
import Player from '../Components/Player';

const mapStateToProps = (state) => {
  return {
    deck: state.blackjack.deck,
    cards: state.blackjack.player,
    dealer: state.blackjack.dealer,
    winner: state.blackjack.winner,
    coins: state.coins
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
  },
  winCoins(amount) {
    dispatch({
      type:'ADD_COINS',
      amount
    })
  },
  payCoins(amount) {
    dispatch({
      type:'REMOVE_COINS',
      amount
    })
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Player);
