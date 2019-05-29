import { connect } from 'react-redux';
import Player from '../Components/Player';

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    cards: state.player
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);
