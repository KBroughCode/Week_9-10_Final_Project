import React from 'react';
import './leaderboard.css';

const Leaderboard = (props) => {

  function generate_text() {

  const topScores = props.leaders.length;
  console.log('top score = ' , topScores);
  switch (topScores) {
    case 0:
      return <div>No entries in high score table</div>

    case 1:
      return <div>{props.leaders[0].name} : {props.leaders[0].score} points</div>

    case 2:
      return <div>{props.leaders[0].name} : {props.leaders[0].score} points : {props.leaders[1].name} : {props.leaders[1].score} points
      </div>

    case 3:
      return <div>{props.leaders[0].name} : {props.leaders[0].score} points : {props.leaders[1].name} : {props.leaders[1].score} points : {props.leaders[2].name} : {props.leaders[2].score} points
      </div>

    case 4:
      return <div>{props.leaders[0].name} : {props.leaders[0].score} points : {props.leaders[1].name} : {props.leaders[1].score} points : {props.leaders[2].name} : {props.leaders[2].score} points : {props.leaders[3].name} : {props.leaders[3].score} points
      </div>

    default:
      return <div>{props.leaders[0].name} : {props.leaders[0].score} points : {props.leaders[1].name} : {props.leaders[1].score} points : {props.leaders[2].name} : {props.leaders[2].score} points : {props.leaders[3].name} : {props.leaders[3].score} points :
      {props.leaders[4].name} : {props.leaders[4].score} points
      </div>

  }
}
  // console.dir(props);
  // const board = props.leaderss.map((element, index) => {
  //   while (index < 5) {
  //     return <div>{element.name}: {element.score} points</div>
  //   }
  // })
  // return (
  //    <div className="scroll-left">
  //     <p>{board}</p>
  //    </div>
  //   )


  console.log(props.leaders.length);
//<p>  {generate_text(props)} </p>
  return(


  <div className="scroll-left">
     <p>{generate_text()}</p>
  </div>
)
}

export default Leaderboard;
