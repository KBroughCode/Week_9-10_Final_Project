import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';

class OldMaidGame extends Component{

  componentDidMount(){
    this.props.dealHands()
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='human-hand'
          <OldMaidPlayerHand
            hand= {props.one}
          />
        </div>
        <div className='cpu-one'
          <OldMaidPlayerHand
            hand= {props.two}
          />
        </div>
        <div className='cpu-two'>
          <OldMaidPlayerHand
            hand= {props.three}
          />
        </div>
        <div className='cpu-three'
          <OldMaidPlayerHand
            hand= {props.four}
          />
        </div>
      </div>
    )
  }

}

export default OldMaidGame;
