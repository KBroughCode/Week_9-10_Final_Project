import { connect } from 'react-redux';
import SnapGame from '../Components/SnapGame';

const mapStateToProps = (state) => {
  return {
    deck: state.snap.deck,
    pile: state.snap.pile
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToPile() {
    dispatch({
      type: 'ADD_TO_PILE'
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_DEFAULT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SnapGame);
