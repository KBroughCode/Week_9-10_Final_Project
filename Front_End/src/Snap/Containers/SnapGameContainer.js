import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React from 'react';
import SnapStartButton from '../Components/SnapStartButton'
import DeckCards from '../Components/DeckCards';
import PileCards from '../Components/PileCards';
import PlayerActions from '../Components/PlayerActions';
import WinnerDisplay from '../Components/WinnerDisplay';
import PropTypes from 'prop-types';

const SnapGameContainer = (props) => {

const handleClick = () => {
   props.handleGameStart();
   props.resetDefault();
   props.getDeck();
 }

 const handleHomeClick = () => {
   props.resetDefault();
   props.handleGameStart();
 }

 if(props.deck.length > 0){
   return(
     <div>
       <div className="snap-cards-container">
       <WinnerDisplay snapWin={props.snapWin}/>
         <div className ="snap-cards">
         <DeckCards
           deck = {props.deck}
           />
         <PileCards
           pile = {props.pile}
           winCoins={props.winCoins}
           payCoins={props.payCoins}
           />
         </div>
       </div>
       <div className ="snap-player-buttons">
         <SnapStartButton />
         <PlayerActions
          handleGamePause = {props.handleGamePause}
          startGame={props.startGame}
          pile = {props.pile}
          winCoins={props.winCoins}
          payCoins={props.payCoins}
          toggleSnap={props.toggleSnap}
          />
        </div>
      </div>
    )
  }else{
    return(
      <div>
        <div>
          <div>The game is over. Would you like to play again?</div>
            <Link className='game-link' to='/snap' onClick={handleClick}>New Game</Link>
            <Link className='game-link' to='/' onClick={handleHomeClick}>Exit to Main Menu</Link>
        </div>
      </div>
     )
   }
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
  },

})

SnapGameContainer.propTypes = {
  deck: PropTypes.array,
  pile: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(SnapGameContainer);
