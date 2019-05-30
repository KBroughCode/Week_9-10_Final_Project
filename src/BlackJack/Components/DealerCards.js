import React, { Component } from 'react';
import Card from './Card';
import dealerHand from '../Logic/DealerLogic';
import './dealerCards.css'

class DealerCards extends Component {

  constructor(props) {
    super(props)
    this.mapCards = this.mapCards.bind(this)
  }

  componentDidMount(){
    this.props.shuffleDealer()
  }

  componentDidUpdate(prevProps){
    if(this.props.cards !== prevProps.cards) {
      while (!dealerHand(this.props.cards).stick) {
        this.props.twistDealer();
        break;
      }
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
