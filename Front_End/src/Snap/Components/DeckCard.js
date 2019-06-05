import React from 'react';

const DeckCard = (props) =>{

  return(
    <div>
      <div className = "snap-dealer-card">
        <img aria-label='image' src={props.image} alt={props.code} width = '180' height = '255' key={props.key} ></img>
      </div>
    </div>
  );

};

export default DeckCard
