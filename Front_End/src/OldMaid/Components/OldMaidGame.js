import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';
import OldMaidHumanPlayerHand from './OldMaidHumanPlayerHand';
import './oldMaidGame.css'

class OldMaidGame extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerSelectOne: null,
      playerSelectTwo: {}
    }

    this.pairing = this.pairing.bind(this)
  }

  componentDidMount(){
    this.props.dealHands()
  }

  pairing(card){
    if(!this.state.playerSelectOne){
      this.setState({playerSelectOne: card})
    } else {
      this.setState({playerSelectTwo: card})
    }
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='human-hand'>
          <OldMaidHumanPlayerHand
            hand= {this.props.one}
            pairing={this.pairing}
          />
        </div>
        <div className='cpu-one'>
          <OldMaidPlayerHand
            hand= {this.props.two}
          />
        </div>
        <div className='cpu-two'>
          <OldMaidPlayerHand
            hand= {this.props.three}
          />
        </div>
        <div className='cpu-three'>
          <OldMaidPlayerHand
            hand= {this.props.four}
          />
        </div>
      </div>
    )
  }

}

export default OldMaidGame;
