import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
// import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line
import { browserHistory } from 'react-router';
// eslint-disable-next-line
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const create = applyMiddleware(thunk)(createStore);

// eslint-disable-next-line
// function storeConfig (initialState) {
//   return create(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// }

// let store = storeConfig();
// let history = syncHistoryWithStore(browserHistory, store);

// eslint-disable-next-line
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// // eslint-disable-next-line
// import { syncHistoryWithStore } from 'react-router-redux';
// import AppBar                   from './components/AppBar';
// import store, { history }       from './store';
// import { requireAuth }          from './utilities/auth';
// import App                      from './containers/App';
// import LogIn                    from './containers/LogIn';
// import SignUp                   from './containers/SignUp';
// import Links                    from './containers/Links';
// import Secret                   from './containers/Secret';
// import Home                     from './components/Home';
// import About                    from './components/About';

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
    {/* <Router history={browserHistory}>
      <AppBar />
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/login" component={ LogIn } />
        <Route path="/links" component={ Links } />
        <Route path="/about" component={ About } />
        <Route path="/secret" component={ Secret } onEnter={requireAuth.bind(this, store)} />
        <Route path="/signup" component={ SignUp } />
      </Route>
    </Router> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// export { history };
export default store;
