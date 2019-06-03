import React, { Component } from "react";
import { connect } from 'react-redux';
import PlayerContainer from './Containers/PlayerContainer';
import DealerContainer from './Containers/DealerContainer';
import StartBlackjackButton from './Components/StartBlackjackButton';
import WinnerDisplay from './Components/WinnerDisplay';

class BlackJack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false
    }

    this.handleGameStart = this.handleGameStart.bind(this)
    this.dealingCards = this.dealingCards.bind(this)
  }

  componentDidMount() {
    this.props.getDeck();
  }

  dealingCards(){
    const cardFlip = document.querySelector(".start-game");
      cardFlip.addEventListener("click", function() {
      cardFlip.classList.toggle("flip");
    })
  }

  handleGameStart() {
    this.setState({reveal: !this.state.reveal})
    const cardFlip = document.querySelector(".start-game");
      cardFlip.addEventListener("click", function() {
      cardFlip.classList.toggle("flip");
    })
  }

  render(){
    if(this.state.reveal){
      if(this.props.winner){
        return (
          <div className="black-jack">
            <DealerContainer />
            <PlayerContainer
            />
            <WinnerDisplay
              winner= {this.props.winner}
              resetDefault= {this.props.resetDefault}
              handleGameStart= {this.handleGameStart}
              getDeck= {this.props.getDeck}
            />
          </div>
        );
      } else{
        return(
          <div className="black-jack">
            <DealerContainer />
            <PlayerContainer />
          </div>
        )
      }
    } else{
      return(
        <div className="start-button">
          <StartBlackjackButton
            handleGameStart={this.handleGameStart}
            payCoins={this.props.payCoins}
            coins={this.props.coins}
          />
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return{
    winner: state.blackjack.winner,
    coins: state.coins
  }
}

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
          })
        })
        })
      })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_DEFAULT'
    })
  },
  payCoins(amount) {
    dispatch({
      type:'REMOVE_COINS',
      amount
    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(BlackJack);
