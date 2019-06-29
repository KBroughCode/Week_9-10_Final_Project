import React, { Component } from 'react';
import Card from './Card';
import dealerHand from '../Logic/DealerLogic';
import './dealerCards.css';


class DealerCards extends Component {

  constructor(props) {
    super(props);
    this.mapCards = this.mapCards.bind(this);
    this.handleErrorClick = this.handleErrorClick.bind(this);
  };

  componentDidMount(){
    this.props.shuffleDealer();
  };

  componentDidUpdate(prevProps){
    if(this.props.cards !== prevProps.cards) {
      while (!dealerHand(this.props.cards).stick) {
        this.props.twistDealer();
        break;
      };
    };
  };

  mapCards() {
    return this.props.cards.map((element, i) => {
      return(
        <Card
          image = {element.image}
          code = {element.code}
          value = {element.value}
          suit = {element.suit}
          key= {i}
          index={i}
        />
      )
    });
  };

  handleErrorClick() {
    this.props.shuffleDealer();
  };

  displayDealerValue() {
    const dealerValue = dealerHand(this.props.cards).value;
    if(dealerValue){
      return `The Dealer's total is ${dealerValue}`
    }else{
      this.props.setDealerBust();
      return `The Dealer has gone bust`
    };
  };

  render(){
    if(this.props.cards.length > 0){
      return(
        <div className = 'dealer-box'>
          <div className='dealer-cards'>
            {this.mapCards()}
          </div>
          <div className='dealer-text'>
            <div>{this.displayDealerValue()}</div>
          </div>
        </div>
      )
    }else{
      return(
        <div
          className='dealer-cards'
          onClick={this.handleErrorClick}
        >
          Whoops! The Dealer dropped his cards! Click here to get him to pick them up
        </div>
      )
    };
  };

};

export default DealerCards;
