import React from 'react';
import { connect } from 'react-redux';
import './leaderboard.css';

const Leaderboard = (props) => {
   const leaders = props.casino.map((casino) => {
     return {casino.name} {casino.score}
   })
    return <div className="leaderboard-item"><ol>{leaders}</ol>
}

const mapStateToProps = (state) => {
  return{
  leaderData: state
}
}

export default connect(mapStateToProps)(Leaderboard);
