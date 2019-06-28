import React from 'react';
import Ticker from 'react-ticker';
import './leaderboard.css';

//Top 10 leaderboard
const Leaderboard = (props) => {

  const topTen = props.leaders.slice(0,10);
  const highboard = topTen.map((element, index) => {
    return ` ♣ ${index+1}. ${element.name} - ₡${element.score} ♣ `
  });

  return (
    <Ticker speed={20}>
    {() => (<h1 style={{ whiteSpace: "nowrap" }}>High Scores...{highboard}</h1>)}
    </Ticker>
   );
}

export default Leaderboard;
