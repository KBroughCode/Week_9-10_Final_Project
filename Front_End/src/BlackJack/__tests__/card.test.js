import React from 'react';
import Card from '../Components/Card.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('Card render test', () => {
  it('should display an image of a card', () => {
    const {getByLabelText} = render(<Card
      code= "0D"
      image= "https://deckofcardsapi.com/static/img/0D.png"
      suit= "DIAMONDS"
      value= "10"
      />)
      expect(getByLabelText('image')).toBeTruthy();
  })

})
