import { connect } from 'react-redux';
import DealerCards from '../Components/DealerCards';

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    cards: state.dealer
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DealerCards);
