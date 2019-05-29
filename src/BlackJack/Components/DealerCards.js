import React from 'react';
import Card from './Card';

class DealerCards {

  constructor(props) {
    super(props)

    this.mapCards = this.mapCards.bind(this)
  }

  componentDidMount() {
    this.props.shuffleDealer(this.props.deck);

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
      <div>
      <div className='dealer-cards'>
        {this.mapCards}
      </div>
      </div>
    )
  }
}

export default DealerCards;
