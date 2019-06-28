import React from 'react';
import './leaderboard.css';
//Top 10 leaderboard
const Leaderboard = (props) => {
  const topTen = props.leaders.slice(0,10);
  const highboard = topTen.map((element, index) => {
    return ` ♣ ${index+1}. ${element.name} - ₡${element.score} ♣ `
  });

  return (
    <div className="marquee">
    <div>
    <span><p>High Scores... {highboard}</p></span>
    <span><p>High Scores... {highboard}</p></span>
    </div>
    </div>
   );
}

export default Leaderboard;

// <div className="slideshow">
// <p>High Scores {highboard} High Scores {highboard} High Scores {highboard}</p>
// </div>
