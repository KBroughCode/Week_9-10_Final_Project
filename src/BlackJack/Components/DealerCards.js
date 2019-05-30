import React, { Component } from 'react';
import Card from './Card';
import dealerHand from '../Logic/DealerLogic';

class DealerCards extends Component {

  constructor(props) {
    super(props)
    this.mapCards = this.mapCards.bind(this)
  }

  componentDidMount(){
    this.props.shuffleDealer()
    console.log(dealerHand(this.props.cards));
    while (!dealerHand(this.props.cards).stick) {
      console.log('while loop activated', dealerHand(this.props.cards));
      this.props.twistDealer()
    }
  }

  mapCards() {
    return this.props.cards.map((element, index) => {
      return(
        <Card
          key={index}
          image={element.image}
          value={element.value}
          suit={element.suit}
          code={element.code}
        />
      )
    })
  }

  render(){
    if(this.props.cards.length > 0){
      return(
          <div className='dealer-cards'>
            {this.mapCards()}
          </div>
      )
    } else {
        return(
        <h1>Dealing...</h1>
      )
    }
  }

}

export default DealerCards;
