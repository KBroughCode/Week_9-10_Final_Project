import React, { Component } from "react";
import { connect } from 'react-redux';
import SnapStartButton from './Components/SnapStartButton';
import SnapGameContainer from './Containers/SnapGameContainer';

import './snap.css';

class Snap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGamePause = this.handleGamePause.bind(this);
    this.startGame=this.startGame.bind(this);
  };

  componentDidMount() {
    this.props.getDeck();
  };

  startGame(){
    this.game = setInterval(this.props.addToPile,1250);
  };

  handleGameStart() {
    this.startGame();
    this.setState({reveal: !this.state.reveal});
  };

  handleGamePause(){
    clearInterval(this.game);
  };

  render(){
    if(this.state.reveal){
      return(
        <div className= "snap">
          <SnapGameContainer
            startGame={this.startGame}
            handleGamePause={this.handleGamePause}
            winCoins={this.props.winCoins}
            payCoins={this.props.payCoins}
          />
        </div>
      );
    }else{
      return(
        <div className= "snap-player-buttons">
          <SnapStartButton
            handleGameStart={this.handleGameStart}
          />
        </div>
      );
    };
  };

};

const mapDispatchToProps = (dispatch) => ({
  getDeck() {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      .then(res => res.json())
      .then(deck => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: 'GET_SNAP_DECK',
            deck
          });
        });
      });
    });
  },
  addToPile() {
    dispatch({
      type: 'ADD_TO_PILE'
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_SNAP_DEFAULT'
    })
  },
  winCoins(amount) {
    dispatch({
      type:'ADD_COINS',
      amount
    })
  },
  payCoins(amount) {
    dispatch({
      type:'REMOVE_COINS',
      amount
    })
  }
});


export default connect(null, mapDispatchToProps)(Snap);
