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
      counter: 0,
      snap: 0,
      pause: false
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleGamePause = this.handleGamePause.bind(this);
    this.startGame=this.startGame.bind(this);
    this.dealCard = this.dealCard.bind(this);
    this.checkCardCount = this.checkCardCount.bind(this);
    this.toggleSnap = this.toggleSnap.bind(this);
    this.togglePause = this.togglePause.bind(this);
  };

  componentDidMount() {
    this.props.getDeck();
  };

  componentWillUnmount() {
    clearInterval(this.game)
  }

  checkCardCount(){
    this.state.counter <= 52 ? this.props.addToPile() : clearInterval(this.game);
  }

  dealCard(){
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter }, () => { this.checkCardCount() });
  };

  startGame(){
    const waitTime = 1250;
    this.game = setInterval(this.dealCard, waitTime);
    this.setState({snap: 0})
  };

  handleGameStart() {
    this.startGame();
    this.setState({counter: 0});
    this.setState({reveal: true});
  };

  handleExitClick() {
    this.setState({reveal: !this.state.reveal});
  };

  handleGamePause(){
    clearInterval(this.game);
  };

  toggleSnap(value) {
    this.setState({snap: value});
  }

  togglePause() {
    this.setState({pause: !this.state.pause})
  }

  render(){
    if(this.state.reveal){
      return(
        <div className= "snap">
          <SnapGameContainer
            startGame={this.startGame}
            handleGameStart={this.handleGameStart}
            handleExitClick={this.handleExitClick}
            resetDefault={this.props.resetDefault}
            getDeck={this.props.getDeck}
            handleGamePause={this.handleGamePause}
            winCoins={this.props.winCoins}
            payCoins={this.props.payCoins}
            snapWin={this.state.snap}
            toggleSnap={this.toggleSnap}
            togglePause={this.togglePause}
            pause={this.state.pause}
          />
        </div>
      );
    }else{
      return(
        <div className="snap-before-game">
          <div className="snap-cards-container"></div>
          <div className= "snap-player-buttons">
            <SnapStartButton
              handleGameStart={this.handleGameStart}
            />
          </div>
        </div>
      );
    };
  };

};

const mapDispatchToProps = (dispatch) => ({
  getDeck() {
    dispatch(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=26`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: 'GET_SNAP_DECK',
            deck
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
