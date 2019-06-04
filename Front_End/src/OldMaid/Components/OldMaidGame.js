import React, { Component } from 'react';

class OldMaidGame extends Component{

  componentDidMount(){
    this.props.dealHands()
  }

  render(){
    return(
      <div>
      <OldMaidPlayerHand 
        hand= {props.}
      />
      </div>
    )
  }

}

export default OldMaidGame;
