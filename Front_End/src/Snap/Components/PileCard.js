import React from 'react';

const PileCard = (props) =>{


  return(
    <div className = "pile-container">
      <div className = "card-container">
        <div className = "snap-card" onClick = {props.handleGamePause}>
        <img aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key={props.key} ></img>
        </div>
      </div>
    </div>

  )
}

export default PileCard
