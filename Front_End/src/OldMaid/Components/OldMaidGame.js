import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';
import OldMaidHumanPlayerHand from './OldMaidPlayerHand';
import './oldMaidGame.css'

class OldMaidGame extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerSelectOne: {},
      playerSelectTwo: {}
    }

    this.pairing = this.pairing.bind(this)
  }

  componentDidMount(){
    this.props.dealHands()
  }

  pairing(card){
    console.log('before if', card);
    if(!this.state.playerSelectOne){
      console.log('if section one', card);
      this.setState({playerSelectOne: card})
    } else {
      console.log('else', card);
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
