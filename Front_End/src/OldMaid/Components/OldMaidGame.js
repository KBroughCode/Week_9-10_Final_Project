import React, { Component } from 'react';

class OldMaidGame extends Component{

  componentDidMount(){
    this.props.dealHands()
  }

  render(){
    return(
      <div>
      OLD MAID THE GAME COMING SOON!
      </div>
    )
  }

}

export default OldMaidGame;
