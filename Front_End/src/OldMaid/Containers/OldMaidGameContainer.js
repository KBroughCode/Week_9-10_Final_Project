import { connect } from 'react-redux';
import OldMaidGame from '../Components/OldMaidGame';

const mapStateToProps = (state) => {
  return {
    deck: state.snap.deck,
    pile: state.snap.pile
  };
};

const mapDispatchToProps = (dispatch) => ({
  dealHands() {
    dispatch({
      type: 'DEAL_OLD_MAID_HANDS'
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_OLD_MAID_DEFAULT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(OldMaidGame);
