import { connect } from 'react-redux';
import OldMaidGame from '../Components/OldMaidGame';

const mapStateToProps = (state) => {
  return {
    deck: state.oldMaid.deck,
    one: state.oldMaid.one,
    two: state.oldMaid.two,
    three: state.oldMaid.three,
    four: state.oldMaid.four
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
