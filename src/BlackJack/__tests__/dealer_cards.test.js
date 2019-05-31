import React from 'react';
import DealerCards from '../Components/DealerCards.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('delear cards test', () => {
  it('should render an error with no cards', () => {
    const {getByText} = render(<DealerCards cards={[]} shuffleDealer={jest.fn()}/>)
    expect(getByText('Whoops! The Dealer dropped his cards! Click here to get him to pick them up')).toBeTruthy();
  })

  it('should render cards', () => {
    const {getByText, getByLabelText} = render(<DealerCards cards={[{
      image: "https://deckofcardsapi.com/static/img/AS.png",
      value: "ACE",
      suit: "SPADES",
      code: "AS"
    }
  ]} shuffleDealer={jest.fn()}/>)
    expect(getByLabelText('image')).toBeTruthy();
    expect(getByText('ACE of SPADES')).toBeTruthy();
  })
})
