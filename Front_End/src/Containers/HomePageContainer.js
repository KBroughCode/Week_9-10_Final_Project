import { connect } from 'react-redux';
import HomePage from '../Components/HomePage';

const mapStateToProps = (state) => {
  return {leaders: state.leaderboard}
}

export default connect(mapStateToProps)(HomePage);
