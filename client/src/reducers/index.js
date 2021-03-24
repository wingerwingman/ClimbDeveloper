import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth  from './auth';
import links from './links';
import areaReducer from './areaReducer';
// import error from './error';


const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  links,
  areaReducer
})

export default rootReducer