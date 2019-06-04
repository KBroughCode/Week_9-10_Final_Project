import { combineReducers } from 'redux';

import cardReducer from './card_reducer';
import snapReducer from './snap_reducer';
import coinReducer from './coin_reducer';
import leaderBoardReducer from './leaderboard_reducer';
import oldMaidReducer from './leaderboard_reducer';

export default combineReducers({
  blackjack: cardReducer,
  coins: coinReducer,
  snap: snapReducer,
  leaderboard: leaderBoardReducer,
  oldMaid: oldMaidReducer
});
