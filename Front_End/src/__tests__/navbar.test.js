import React from 'react';
import Navbar from '../NavBar.js';
import {render, fireEvent, cleanup} from '@testing-library/react';
import reducer from '../reducers/index.js';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

afterEach(cleanup)

describe('Navbar render tests', () => {
  xit('should display coins', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )
    expect(getByText('₡100')).toBeTruthy()
  })
})
