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
      playerSelectOne: null,
      handSize1: "small",
      handSize2: "small",
      handSize3: "small",
      handSize4: "small",
      drawCard: false
    };

    this.pairing = this.pairing.bind(this);
    this.playRound = this.playRound.bind(this);
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.toggleDraw = this.toggleDraw.bind(this);
    this.setHandSizes = this.setHandSizes.bind(this);
  };

  componentDidMount(){
    this.props.dealHands()
  };

  pairing(card){
    if(!this.state.playerSelectOne){
      this.setState({playerSelectOne: card});
    } else {
      if(this.state.playerSelectOne.index < card.index){
        this.addingPairs(this.state.playerSelectOne, card, 'one');
      } else {
        this.addingPairs(card, this.state.playerSelectOne, 'one');
      };
    };
  };

  addingPairs(cardOne, cardTwo, player) {
    const logic = new OldMaidLogic();
    if(logic.checkPair(cardOne, cardTwo)) {
      this.props.addPairToPile(cardOne, cardTwo, player);
      if (this.props.one.length < 14 && this.state.handSize1 === 'large') {
        this.setHandSizes('one')
      }
    };
    this.setState({playerSelectOne: null});
  };

  playRound(){
    this.props.pickCard(this.randCard(this.props.three),'two','three');
    this.props.pickCard(this.randCard(this.props.four),'three','four');
    this.props.pickCard(this.randCard(this.props.one),'four','one');
  }

  randCard(array){
    const index = Math.floor(Math.random() * array.length);
    return {...array[index], index: index};
  };

  handleCardNumber(size) {
    this.setState({handSize: size})
  }

  toggleDraw() {
    this.setState({drawCard: !this.state.drawCard})
  }

  setHandSizes(player) {
    if (player === "one") {
      if (this.state.handSize1 === 'small') {
        this.setState({handSize1: "large"})
      } else {
        this.setState({handSize1: "small"})
      }
    } else if (player === "two") {
      if (this.state.handSize2 === 'small') {
        this.setState({handSize2: "large"})
      } else {
        this.setState({handSize2: "small"})
      }
    } else if (player === "three") {
      if (this.state.handSize3 === 'small') {
        this.setState({handSize3: "large"})
      } else {
        this.setState({handSize3: "small"})
      }
    } else if (player === "four") {
      if (this.state.handSize4 === 'small') {
        this.setState({handSize4: "large"})
      } else {
        this.setState({handSize4: "small"})
      }
    }
  }

  render(){
    return(
      <div className='old-maid-game'>
        <div className='center-grid'>
          <div className='absolute-pos'>
            <div className='next-round'>
              <NextRoundButton
                playRound={this.playRound}
                toggleDraw={this.toggleDraw}
                drawCard={this.state.drawCard}
                setHandSizes={this.setHandSizes}
                handSize2={this.state.handSize2}
                handSize3={this.state.handSize3}
                handSize4={this.state.handSize4}
                {...this.props}
              />
            </div>
          </div>
        </div>
        <div className='bottom-grid'>
          <div className='absolute-pos player-pos'>
            <div className='human-hand'>
              <OldMaidHumanPlayerHand
                hand= {this.props.one}
                pairing={this.pairing}
                handleCardNumber={this.handleCardNumber}
                handSize={this.state.handSize1}
              />
            </div>
          </div>
        </div>
        <div className='left-grid'>
          <div className='absolute-pos cpu1-pos'>
            <div className='cpu-one'>
              <OldMaidPlayerHand
                hand= {this.props.two}
                pickCard= {this.props.pickCard}
                player= 'two'
                updateCpuHand={this.props.updateCpuHand}
                handSize={this.state.handSize2}
                handSize1={this.state.handSize1}
                drawCard={this.state.drawCard}
                toggleDraw={this.toggleDraw}
                humanHand={this.props.one}
                setHandSizes={this.setHandSizes}
              />
            </div>
          </div>
        </div>
        <div className='top-grid'>
          <div className='absolute-pos cpu2-pos'>
            <div className='cpu-two'>
              <OldMaidPlayerHand
                hand= {this.props.three}
                pickCard= {this.props.pickCard}
                player= 'three'
                updateCpuHand={this.props.updateCpuHand}
                handSize={this.state.handSize3}
              />
            </div>
          </div>
        </div>
        <div className='right-grid'>
          <div className='absolute-pos cpu3-pos'>
            <div className='cpu-three'>
              <OldMaidPlayerHand
                hand= {this.props.four}
                pickCard= {this.props.pickCard}
                player= 'four'
                updateCpuHand={this.props.updateCpuHand}
                handSize={this.state.handSize4}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

};

export default OldMaidGame;
