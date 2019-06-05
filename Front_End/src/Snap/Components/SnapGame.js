import React from 'react';
import SnapStartButton from './SnapStartButton'
import DeckCards from './DeckCards';
import PileCards from './PileCards';

const SnapGame = (props) => {

  console.log("PROPS", props);

  return(
    <div>
    <SnapStartButton />
    <DeckCards deck = {props.deck}/>
    <PileCards pile = {props.pile}/>
      SNAP THE GAME COMING SOON!

    </div>
  )
}

export default SnapGame;
