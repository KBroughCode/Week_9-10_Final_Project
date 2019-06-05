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
  },
  addHiScore(data) {
      dispatch(() => {
        fetch('http://localhost:3000/api/casino/scores', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json'}
        }
        )
        .then(res => res.json())
        .then(casinoData => {
          dispatch({
            type: 'GET_LEADER_DATA',
            casinoData
          })
        })
        .then(casinoData => {
          dispatch({
            type: 'SET_COINS'
          })
        })
      })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
