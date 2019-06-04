import React from 'react';
import './leaderboard.css';
//Top 10 leaderboard
const Leaderboard = (props) => {
  const highboard = props.leaders.map((element, index) => {
    while (index < 5) {
      return ` ♣ ${element.name}: 	₡${element.score} ♣ `
    }
  })
  return (

    <div className="scroll-left">
     <p>High Scores {highboard}</p>
     </div>
    )

}

export default Leaderboard;
