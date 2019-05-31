import { combineReducers } from 'redux';

import cardReducer from './card_reducer.js';

import coinReducer from './coin_reducer'

export default combineReducers({
  deck: cardReducer,
  coins: coinReducer
});
