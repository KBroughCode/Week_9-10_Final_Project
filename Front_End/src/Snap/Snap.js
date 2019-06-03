import React, { Component } from "react";
import { connect } from 'react-redux';
import SnapStartButton from './Components/SnapStartButton';
import SnapGameContainer from './Containers/SnapGameContainer';

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
      return(
        <div className= "snap">
          <SnapGameContainer />
        </div>
      )
    } else{
      return(
        <div className= "snap">
          <SnapStartButton />
        </div>
      )
    }
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


export default connect(null, mapDispatchToProps)(Snap);
