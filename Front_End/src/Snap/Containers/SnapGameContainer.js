import { connect } from 'react-redux';
// import SnapGameContainer from '../Components/SnapGameContainer';
import React from 'react';
import SnapStartButton from '../Components/SnapStartButton'
import DeckCards from '../Components/DeckCards';
import PileCards from '../Components/PileCards';

const SnapGameContainer = (props) => {

  console.log("PROPS", props);

  return(
    <div>
    <SnapStartButton />
    <DeckCards
      deck = {props.deck}
      />
    <PileCards
      pile = {props.pile}
      handleGamePause = {props.handleGamePause}
      startGame={props.startGame}
      />
      SNAP THE GAME COMING SOON!
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
      type: 'RETURN_DEFAULT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SnapGameContainer);
