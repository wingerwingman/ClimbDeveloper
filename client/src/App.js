import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
// eslint-disable-next-line
import { syncHistoryWithStore } from 'react-router-redux';
import NavigationBar                   from './components/NavBar';
import './App.css';
// eslint-disable-next-line
import store, { history } from './index';
import { requireAuth }          from './utilities/auth';
// import AppProps                 from './containers/AppProps';
import LogIn                    from './containers/LogIn';
import SignUp                   from './containers/SignUp';
import Links                    from './containers/Links';
import Secret                   from './containers/Secret';
import Home                     from './components/Home';
import About                    from './components/About';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink, withRouter } from 'react-router-dom';
const App = () => {
  
    return (
        <Router history={browserHistory}>
        <div className="App">
          <NavigationBar />
              {/* <Route path="/" component={ AppProps }> */}
              <Route exact path="/" component={ Home } />
              <Route path="/login" component={ LogIn } />
              <Route path="/links" component={ Links } />
              <Route path="/about" component={ About } />
              <Route path="/secret" component={ Secret } onEnter={requireAuth.bind(this, store)} />
              <Route path="/signup" component={ SignUp } />
              {/* </Route> */}
        </div>
        </Router>
    );
};

export default App;