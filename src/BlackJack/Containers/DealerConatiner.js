import { connect } from 'react-redux';
import ResultBox from '../components/ResultBox';

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    player: state.shuffle,
    cards: state.dealer
  };
};

const mapDispatchToProps = (dispatch) => ({
  shuffleDealer(deck) {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
      .then(res => res.json())
      .then(cards => {
        dispatch({
          type: 'SHUFFLE_DEALER',
          cards
        })
      })
    })
  },
  twistDealer(deck) {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
      .then(res => res.json())
      .then(card => {
        dispatch({
          type: 'TWIST_DEALER',
          card
        })
      })
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultBox);
