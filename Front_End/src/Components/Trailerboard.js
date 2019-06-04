import React from 'react';
import './trailerboard.css';
//Top 10 leaderboard
const Trailerboard = (props) => {
console.dir(props);

  const lowboard = props.losers.map((element, index) => {
    while (index > 15) {
      return `${element.name}: ${element.score} points : `
    }
  })
  return (
    <div className="scroll-right">
     <p>Low Scores ! {lowboard}</p>
     </div>
    )

}

export default Trailerboard;
