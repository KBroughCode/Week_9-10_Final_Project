import { combineReducers } from 'redux';

import cardReducer from './card_reducer.js';
import playerReducer from './shuffle_reducer.js';
import dealerReducer from './dealer_reducer.js';

export default combineReducers({
  deck: cardReducer,
  player: playerReducer,
  dealer: dealerReducer,
});
