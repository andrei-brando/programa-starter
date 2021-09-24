import { combineReducers } from 'redux';

import counter from './counter';
import cards from './cards';
import teams from './teams';

export default combineReducers({
  counter,
  cards,
  teams,
});
