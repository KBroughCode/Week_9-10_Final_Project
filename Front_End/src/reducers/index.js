import { combineReducers } from 'redux';

import cardReducer from './card_reducer';
import snapReducer from './snap_reducer'
import coinReducer from './coin_reducer'

export default combineReducers({
  blackjack: cardReducer,
  coins: coinReducer,
  snap: snapReducer
});
