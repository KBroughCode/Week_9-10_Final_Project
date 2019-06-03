import React from 'react';
import './leaderboard.css';

const Leaderboard = (props) => {
  const board = props.leaders.map((element, index) => {
    while (index < 5) {
      return <div>{element.name}: {element.score} points</div>
    }
  })
  return (
    <div className="leaderboard-item">
    <p>{board}</p>
    </div>
    )
}

export default Leaderboard;
