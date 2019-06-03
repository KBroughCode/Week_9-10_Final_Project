import React from 'react';
import { connect } from 'react-redux';
import './leaderboard.css';

const Leaderboard = (props) => {
   const leaders = props.leaders.map((leader) => {
     return leader.name + " : " + leader.score
   })
    return (
      <div className="leaderboard-item">
      <p>{leaders}</p>
      </div>
    )
}

export default Leaderboard;
