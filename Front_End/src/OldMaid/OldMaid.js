import React, { Component } from "react";
import { connect } from 'react-redux';
import OldMaidStartButton from './Components/OldMaidStartButton';
import OldMaidGameContainer from './Containers/OldMaidGameContainer';

class OldMaid extends Component {
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
          <OldMaidGameContainer />
        </div>
      )
    } else{
      return(
        <div className= "snap">
          <OldMaidStartButton
            handleGameStart={this.handleGameStart}
          />
        </div>
      )
    }
  }
}


const mapDispatchToProps = (dispatch) => ({
  getDeck() {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AH,AC,AD,2S,2H,2D,2C,3S,3H,3D,3C,4S,4H,4C,4D,5S,5H,5C,5D,6S,6H,6D,6C,7S,7H,7D,7C,8D,8C,8S,8H,9D,9C,9S,9H,10D,10C,10S,10H,JD,JC,JH,JS,QS,KS,KH,KD,KC`)
      .then(res => res.json())
      .then(deck => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=49`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: 'GET_OLD_MAID_DECK',
            deck
          })
        })
      })
    })
  },
  resetDefault() {
    dispatch({
      type: 'RETURN_OLD_MAID_DEFAULT'
    })
  }
})


export default connect(null, mapDispatchToProps)(OldMaid);
