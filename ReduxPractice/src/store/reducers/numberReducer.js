import {NUMBER_CHANGE} from '../actions/actionTypes';
const initialState = {
  number: 2,
};
export default numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_CHANGE:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
