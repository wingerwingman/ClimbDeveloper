import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth  from './auth';
import links from './links';
// import error from './error';


const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  links
})

export default rootReducer