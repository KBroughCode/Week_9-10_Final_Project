import { connect } from 'react-redux';
import DealerCards from '../Components/DealerCards';

const mapStateToProps = (state) => {

  return {
    deck: state.blackjack.deck,
    cards: state.blackjack.dealer
  };

};

const mapDispatchToProps = (dispatch) => ({
  shuffleDealer() {
    dispatch({
      type: 'SHUFFLE_DEALER'
    })
  },
  twistDealer() {
    dispatch({
      type: 'TWIST_DEALER'
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_DEFAULT'
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DealerCards);
