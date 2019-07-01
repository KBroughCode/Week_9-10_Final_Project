
import { connect } from 'react-redux';
import RouletteGame from '../Components/RouletteGame';

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Player);