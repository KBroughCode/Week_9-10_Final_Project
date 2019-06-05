import { connect } from 'react-redux';
import React from 'react';
import SnapStartButton from '../Components/SnapStartButton'
import DeckCards from '../Components/DeckCards';
import PileCards from '../Components/PileCards';
import PlayerActions from '../Components/PlayerActions';

import '../snap.css';

const SnapGameContainer = (props) => {

  console.log("PROPS", props);

  return(
    <div>
      <div className="snap-cards-container">
        <div className ="snap-cards">
        <DeckCards
          deck = {props.deck}
          />
        <PileCards
          pile = {props.pile}
          />
        </div>
      </div>
      <div className ="snap-player-buttons">
        <SnapStartButton />
        <PlayerActions
        handleGamePause = {props.handleGamePause}
        startGame={props.startGame}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    deck: state.snap.deck,
    pile: state.snap.pile
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToPile() {
    dispatch({
      type: 'ADD_TO_PILE'
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_SNAP_DEFAULT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SnapGameContainer);
