import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';
import OldMaidHumanPlayerHand from './OldMaidPlayerHand';
import './oldMaidGame.css'

class OldMaidGame extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerSelectOne: '',
      playerSelectTwo: ''
    }
  }

  componentDidMount(){
    this.props.dealHands()
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='human-hand'>
          <OldMaidHumanPlayerHand
            hand= {this.props.one}
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
