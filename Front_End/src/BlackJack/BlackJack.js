import React, { Component } from "react";
import { connect } from 'react-redux';
import PlayerContainer from './Containers/PlayerContainer';
import DealerContainer from './Containers/DealerContainer';
import StartBlackjackButton from './Components/StartBlackjackButton';
import WinnerDisplay from './Components/WinnerDisplay';

import './blackjack.css';

class BlackJack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false
    };

    this.handleGameStart = this.handleGameStart.bind(this);
  };

  componentDidMount() {
    this.props.getDeck();
  };

  handleGameStart() {
    this.props.setCardsNotReady();
    this.setState({reveal: !this.state.reveal});
  };

  render(){
    if(this.state.reveal){
      if(this.props.winner){
        return (
          <div className="blackjack">
            <div className="dealer-container">
              <DealerContainer/>
            </div>
            <div>
              <PlayerContainer/>
            </div>
            <div className="player-buttons">
              <WinnerDisplay
                winner= {this.props.winner}
                resetDefault= {this.props.resetDefault}
                handleGameStart= {this.handleGameStart}
                getDeck= {this.props.getDeck}
                playerBust= {this.props.playerBust}
                dealerBust= {this.props.dealerBust}
              />
            </div>
          </div>
        );
      }else{
        return(
          <div className="blackjack">
            <div className="dealer-container">
              <DealerContainer/>
            </div>
            <div>
              <PlayerContainer/>
            </div>
          </div>
        )
      };
    }else{
      return(
        <div className="blackjack">
          <div className="dealer-container"></div>
          <div className="player-buttons">
          {
            this.props.cardsReady && <span>
            <StartBlackjackButton
            handleGameStart={this.handleGameStart}
            payCoins={this.props.payCoins}
            coins={this.props.coins}
            cardsReady={this.props.cardsReady}
            />
            </span>
          }
          </div>
        </div>
      );
    };
  };

};

const mapStateToProps = (state) => {
  return{
    winner: state.blackjack.winner,
    coins: state.coins,
    cardsReady: state.cardsReady,
    playerBust: state.blackjack.playerBust,
    dealerBust: state.blackjack.dealerBust
  };
};

const mapDispatchToProps = (dispatch) => ({
  getDeck() {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
      .then(res => res.json())
      .then(deck => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=312`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: 'GET_DECK',
            deck
          });
          dispatch({
            type: 'CARDS_READY',
          });
        });
      });
    });
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_DEFAULT'
    });
  },
  setCardsNotReady() {
    dispatch({
      type: 'CARDS_NOT_READY'
    });
  },
  payCoins(amount) {
    dispatch({
      type:'REMOVE_COINS',
      amount
    });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(BlackJack);
