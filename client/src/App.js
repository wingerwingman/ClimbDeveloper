import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
// eslint-disable-next-line
import { syncHistoryWithStore } from 'react-router-redux';
import NavigationBar                   from './components/NavBar';
import './App.css';
import store, { history } from './index';
import { requireAuth }          from './utilities/auth';
import Header from './components/header'
import LogIn                    from './containers/LogIn';
import SignUp                   from './containers/SignUp';
import Links                    from './containers/Links';
import Home                     from './components/Home';
import About                    from './components/About';
const App = () => {
  
    return (
        <Router history={browserHistory}>
        <div className="App">
          {/* <Header /> */}
          <NavigationBar />
              {/* <Route path="/" component={ AppProps }> */}
              <Route exact path="/" component={ Home } />
              <Route path="/login" component={ LogIn } />
              <Route path="/links" component={ Links } />
              <Route path="/about" component={ About } />
              <Route path="/signup" component={ SignUp } />
              {/* </Route> */}
        </div>
        </Router>
    );
};

export default App;