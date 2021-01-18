import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
// eslint-disable-next-line
import { syncHistoryWithStore } from 'react-router-redux';
import AppBar                   from './components/AppBar';
// eslint-disable-next-line
import store, { history }       from './';
import { requireAuth }          from './utilities/auth';
import AppProps                 from './containers/AppProps';
import LogIn                    from './containers/LogIn';
import SignUp                   from './containers/SignUp';
import Links                    from './containers/Links';
import Secret                   from './containers/Secret';
import Home                     from './components/Home';
import About                    from './components/About';

const App = () => {

    return (
        <Router history={browserHistory}>
        <div className="App">
          <AppBar />
            <Route path="/" component={ AppProps }>
            <Route exact path="/" component={Home} />
              <Route path="/login" component={ LogIn } />
              <Route path="/links" component={ Links } />
              <Route path="/about" component={ About } />
              <Route path="/secret" component={ Secret } onEnter={requireAuth.bind(this, store)} />
              <Route path="/signup" component={ SignUp } />
              </Route>
        </div>
        </Router>
    );
};

export default App;
