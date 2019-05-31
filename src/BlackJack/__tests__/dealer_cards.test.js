import React from 'react';
import DealerCards from '../Components/Card.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('delear cards limited test due to reducer constraints', () => {
  it('should render something', () => {
    const {getByLabelText} = render(<DealerCards />)
    expect(getByLabelText('image')).toBeTruthy();
  })
})
