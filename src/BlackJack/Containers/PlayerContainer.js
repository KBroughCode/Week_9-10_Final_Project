import { connect } from 'react-redux';
import PlayerCards from '../components/PlayerCards';

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    cards: state.shuffle,
    stick: state.playerStick
  };
};

const mapDispatchToProps = (dispatch) => ({
  shuffleDeck(deck) {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
      .then(res => res.json())
      .then(cards => {
        dispatch({
          type: 'SHUFFLE_DECK',
          cards
        })
      })
    })
  },
  twistPlayer(deck) {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
      .then(res => res.json())
      .then(card => {
        dispatch({
          type: 'TWIST_PLAYER',
          card
        })
      })
    })
  },
  // playerStick() {
  //   dispatch({
  //     type: 'PLAYER_STICK'
  //   })
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCards);
