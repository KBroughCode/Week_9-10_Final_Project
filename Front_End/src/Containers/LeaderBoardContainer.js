import React, Component from 'react';
import './App.css';
import {connect} from 'react-redux';
import Leaderboard from '../components/Leaderboard'
class LeaderBoardContainer extends Component {

  componentDidMount(){
    this.props.getData()
  }

  render(){
  return (
    <div>
      <div className="leaderboard-container">
      <div className="leaderboard-header">Leaderboard</div>
      <Leaderboard />
    </div>
  );
}

}
}

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      dispatch(() =>{
        fetch('http://localhost:3000/api/casino')
        .then(res => {
          return res.json().then(casinoData => {
          dispatch({
            type:'ADD_LEADER_DATA',
            leaderboard: casinoData
          })
        })
        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(LeaderBoardContainer);
