import { combineReducers } from 'redux';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filters: filterReducer,
});

export default rootReducer;
