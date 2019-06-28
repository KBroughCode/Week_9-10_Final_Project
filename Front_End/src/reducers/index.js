import { combineReducers } from 'redux';

import cardReducer from './card_reducer';
import cardsReadyReducer from './cards_ready_reducer';
import snapReducer from './snap_reducer';
import coinReducer from './coin_reducer';
import leaderBoardReducer from './leaderboard_reducer';
import oldMaidReducer from './old_maid_reducer';

export default combineReducers({
  blackjack: cardReducer,
  cardsReady: cardsReadyReducer,
  coins: coinReducer,
  snap: snapReducer,
  leaderboard: leaderBoardReducer,
  oldMaid: oldMaidReducer
});
