import {combineReducers} from 'redux';
import countReducer from './countReducer';
import numberReducer from './numberReducer';
const rootReducer = combineReducers({
  count: countReducer,
  number: numberReducer,
});

export default rootReducer;
