import {COUNTER_CHANGE} from './actionTypes';
import {NUMBER_CHANGE} from './actionTypes';
export const changeCount = count => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};
export const changeNum = number => {
  return {
    type: NUMBER_CHANGE,
    payload: number,
  };
};
