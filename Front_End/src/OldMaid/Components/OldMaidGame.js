import React, { Component } from 'react';
import OldMaidPlayerHand from './OldMaidPlayerHand';
import OldMaidHumanPlayerHand from './OldMaidHumanPlayerHand';
import NextRoundButton from './NextRoundButton';
import OldMaidLogic from '../Logic/OldMaidLogic';
import './oldMaidGame.css';

class OldMaidGame extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerSelectOne: null
    }

    this.pairing = this.pairing.bind(this)
    this.playRound = this.playRound.bind(this)
  }

  componentDidMount(){
    this.props.dealHands()
  }

  pairing(card){
    if(!this.state.playerSelectOne){
      this.setState({playerSelectOne: card})
    } else {
      if(this.state.playerSelectOne.index < card.index){
        this.addingPairs(this.state.playerSelectOne, card, 'one')
      } else {
        this.addingPairs(card, this.state.playerSelectOne, 'one')
      }
    }
  }

  addingPairs(cardOne, cardTwo, player) {
    const logic = new OldMaidLogic()
    if(logic.checkPair(cardOne, cardTwo)) {
      this.props.addPairToPile(cardOne, cardTwo, player)
      }
    this.setState({
        playerSelectOne: null
    })
  }

  playRound(){
    this.props.pickCard(this.randCard(this.props.three),'two','three')
    this.props.pickCard(this.randCard(this.props.four),'three','four')
    this.props.pickCard(this.randCard(this.props.one),'four','one')
  }

  randCard(array){
    const index = Math.floor(Math.random() * array.length)
    return {...array[index], index: index}
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='next-round'>
          <NextRoundButton
            playRound={this.playRound}
          />
        </div>
        <div className='human-hand'>
          <OldMaidHumanPlayerHand
            hand= {this.props.one}
            pairing={this.pairing}
          />
        </div>
        <div className='cpu-one'>
          <OldMaidPlayerHand
            hand= {this.props.two}
            pickCard= {this.props.pickCard}
            player= 'two'
            updateCpuHand={this.props.updateCpuHand}
          />
        </div>
        <div className='cpu-two'>
          <OldMaidPlayerHand
            hand= {this.props.three}
            pickCard= {this.props.pickCard}
            player= 'three'
            updateCpuHand={this.props.updateCpuHand}
          />
        </div>
        <div className='cpu-three'>
          <OldMaidPlayerHand
            hand= {this.props.four}
            pickCard= {this.props.pickCard}
            player= 'four'
            updateCpuHand={this.props.updateCpuHand}
          />
        </div>
      </div>
    )
  }

}

export default OldMaidGame;
