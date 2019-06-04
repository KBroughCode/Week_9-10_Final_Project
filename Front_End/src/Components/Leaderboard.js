import React from 'react';
import './leaderboard.css';
//Top 10 leaderboard
const Leaderboard = (props) => {
  const board = props.leaders.map((element, index) => {
    while (index < 10) {
      return `${element.name}: ${element.score} points : `
    }
  })
  return (
     <div className="scroll-left">
      <p>{board}</p>
     </div>
    )
}

export default Leaderboard;
