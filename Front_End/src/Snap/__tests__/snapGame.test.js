import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


afterEach(cleanup)

describe('Navbar render tests', () => {
  xit('should display coins', () => {
    const {getByText} = render(
    )
    expect(getByText('₡100')).toBeTruthy()
  })
})
