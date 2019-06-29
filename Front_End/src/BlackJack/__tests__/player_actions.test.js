import React from 'react';
import PlayerActions from '../Components/PlayerActions.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('PlayerActions render test', () => {
  it('should display draw button initially', () => {
    const {getByText} = render(<PlayerActions
      twistPlayer={jest.fn()}
      shufflePlayer={jest.fn()}
      declareWinner={jest.fn()}
      playerHand={[]}
      dealerHand={[{
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "ACE",
        suit: "SPADES",
        code: "AS"
      },
      {
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "KING",
        suit: "SPADES",
        code: "KS"
      }
    ]}
      winner={null}
      cards={new Array(3, null)}
      />)
      expect(getByText('Draw Hand')).toBeTruthy();
  })

  it('should display twist and stick button when player has a hand', () => {
    const {getByText} = render(<PlayerActions
      twistPlayer={jest.fn()}
      shufflePlayer={jest.fn()}
      declareWinner={jest.fn()}
      playerHand={[{
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "ACE",
        suit: "SPADES",
        code: "AS"
      },
      {
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "KING",
        suit: "SPADES",
        code: "KS"
      }
    ]}
      dealerHand={[{
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "ACE",
        suit: "SPADES",
        code: "AS"
      },
      {
        image: "https://deckofcardsapi.com/static/img/AS.png",
        value: "KING",
        suit: "SPADES",
        code: "KS"
      }
    ]}
      winner={null}
      cards={new Array(3, null)}
      />)
      expect(getByText('Twist')).toBeTruthy();
      expect(getByText('Stick')).toBeTruthy();
  })

})
