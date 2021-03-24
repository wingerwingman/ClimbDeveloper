import {
  USER_ACCESS_REQUESTED,
  USER_LOGED_OUT,
  USER_ACCESS_ERROR,
  USER_SIGNUP_ERROR
} from '../constants';

import { auth } from '../utilities/auth';

let initialState = auth.all() || {};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case USER_ACCESS_REQUESTED:
      auth.set(action.payload);
      return Object.assign({}, action.payload);
    case USER_LOGED_OUT:
      auth.clear();
      return Object.assign({});
    case USER_ACCESS_ERROR:
      return { 
        ...state,
        error: action.payload.errors}
    case USER_SIGNUP_ERROR:
      return { 
        ...state,
        error: action.payload.errors}
    default:
      return state;
  }
}
