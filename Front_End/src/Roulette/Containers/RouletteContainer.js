import { connect } from 'react-redux';
import RouletteGame from '../Components/RouletteGame';

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
  }
}

const mapDispatchToProps = (dispatch) => ({
  winCoins(amount) {
    dispatch({
      type:'ADD_COINS',
      amount
    })
  },
  loseCoins(amount) {
    dispatch({
      type:'REMOVE_COINS',
      amount
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RouletteGame);
