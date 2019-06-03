import { connect } from 'react-redux';
import HomePage from '../Components/HomePage';

const mapStateToProps = (state) => {
  return {
    leaders: state.leaderboard,
    coins: state.coins
  }
}

const mapDispatchToProps = dispatch => ({
  getData() {
    dispatch(() => {
      fetch("http://localhost:3000/api/casino/scores")
        .then(res => res.json())
        .then(casinoData => {
          return dispatch({
            type: "GET_LEADER_DATA",
            casinoData
          });
        });
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
