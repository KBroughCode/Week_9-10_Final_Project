import React, { Component } from "react";
import { connect } from 'react-redux';
import SnapStartButton from './Components/SnapStartButton';
import SnapGameContainer from './Containers/SnapGameContainer';

import './snap.css';

class Snap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false,
      counter: 0
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleGamePause = this.handleGamePause.bind(this);
    this.startGame = this.startGame.bind(this);
    this.dealCard = this.dealCard.bind(this);
    this.checkCardCount = this.checkCardCount.bind(this);
  };

  componentDidMount() {
    console.log('componentDidMount call');
    this.props.getDeck();
  };

  // adding componentWillUnmount
  componentWillUnmount() {
    console.log('UNMOUNTING');
    clearInterval(this.game)
  }

  // adding code here
  checkCardCount(){
    this.state.counter <= 26 ? this.props.addToPile() : clearInterval(this.game);
  }

  dealCard(){
    console.log('dealCard call');
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter }, () => { this.checkCardCount() });
  };
  // to here

  startGame(){
    const waitTime = 250;
    this.game = setInterval(this.dealCard, waitTime);
  };

  handleGameStart() {
    this.startGame();
    this.setState({reveal: !this.state.reveal});
  };

  handleExitClick() {
    console.log('handleExitClick call');
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
            handleGameStart={this.handleGameStart} // ADDED
            handleExitClick={this.handleExitClick} // ADDED
            resetDefault={this.props.resetDefault} // ADDED
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
    console.log('getDeck call');
    dispatch(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=26`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: 'GET_SNAP_DECK',
            deck
          });
        });
    // CONFIRM WITH STAKEHOLDERS MAKING ONE API CALL ONLY
    // dispatch(() => {
    //   fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    //   .then(res => res.json())
    //   .then(deck => {
    //     fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`)
    //     .then(res => res.json())
    //     .then(deck => {
    //       console.log(deck);
    //       dispatch({
    //         type: 'GET_SNAP_DECK',
    //         deck
    //       });
    //     });
    //   });
    });
  },
  addToPile() {
    console.log('ADD_TO_PILE');
    dispatch({
      type: 'ADD_TO_PILE'
    })
  },
  resetDefault() {
    console.log('resetDefault call');
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
