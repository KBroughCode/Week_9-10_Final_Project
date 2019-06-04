import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';
import './oldMaidGame.css'

class OldMaidGame extends Component{

  componentDidMount(){
    this.props.dealHands()
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='human-hand'>
          <OldMaidPlayerHand
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
