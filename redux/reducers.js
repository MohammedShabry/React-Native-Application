// authReducer.js
import { SIGN_IN, SIGN_OUT, SET_USER } from './actions';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
