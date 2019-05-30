import React, { Component } from "react";
import { connect } from 'react-redux';
import PlayerContainer from './Containers/PlayerContainer';
import DealerContainer from './Containers/DealerContainer';
import StartBlackjackButton from './Components/StartBlackjackButton';

class BlackJack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reveal: false
    }

    this.handleGameStart = this.handleGameStart.bind(this)
  }

  componentDidMount() {
    this.props.getDeck();
  }

  handleGameStart() {
    this.setState({reveal: true})
  }

  render(){
    if(this.state.reveal){
      return (
        <div className="black-jack">
          <DealerContainer />
          <PlayerContainer />
        </div>
      );
    } else{
      return(
        <div className="start-button">
        <StartBlackjackButton handleGameStart={this.handleGameStart} />
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return{

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
  }
})


export default connect(null, mapDispatchToProps)(BlackJack);
