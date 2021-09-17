import { combineReducers } from 'redux';

import counter from './counter';
import cards from './cards';

export default combineReducers({
  counter,
  cards,
});
