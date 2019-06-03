import React from 'react';
import './leaderboard.css';

const Leaderboard = (props) => {
  const board = props.leaders.map((element, index) => {
    console.log(props.leaders);
    while (index < 5) {
      console.log(index);
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
