import { combineReducers } from 'redux';

import { inputManagerReducer } from './inputManagerReducer';
import { getHistoryReducer } from './getHistory';

const reducers = combineReducers({
  inputManager: inputManagerReducer,
  getHistory: getHistoryReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
