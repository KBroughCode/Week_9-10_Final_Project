import React from 'react';

const PileCard = (props) =>{


  return(
    <div>
      <div>{props.value} of {props.suit}</div>
        <div onClick = {props.handleGamePause}>
          <img aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key={props.key} ></img>
        </div>
      <div></div>
    </div>

  )
}

export default PileCard
