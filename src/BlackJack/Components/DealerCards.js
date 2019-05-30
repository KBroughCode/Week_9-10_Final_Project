import React, { Component } from 'react';
import Card from './Card';

class DealerCards extends Component {

  constructor(props) {
    super(props)
    this.mapCards = this.mapCards.bind(this)
  }

  mapCards() {
    this.props.cards.map((element, index) => {
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
    return(
      <div className='dealer-cards'>
        {this.mapCards()}
      </div>
    )
  }
}

export default DealerCards;
