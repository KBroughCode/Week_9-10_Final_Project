import React, { Component } from "react";
import { connect } from 'react-redux';
import SnapStartButton from './Components/SnapStartButton'

class Snap extends Component {
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
    this.setState({reveal: !this.state.reveal})
  }

  render(){
    if(this.state.reveal){
      if(this.props.winner){
        return (
          <div className="snap">
          </div>
        );
      } else{
        return(
          <div className="Snap">
          </div>
        )
      }
    } else{
      return(
        <div className="start-button">
        <StartSnapButton handleGameStart={this.handleGameStart} />
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return{
    winner: state.snap.winner
  }
}

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
          })
        })
        })
      })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_SNAP_DEFAULT'
    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Snap);
