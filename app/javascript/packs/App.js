import { hot } from 'react-hot-loader/root';
import React from 'react';
// import { hot } from 'react-hot-loader';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {

  // logout() {
    // localStorage.clear();
    // window.location.href = '/';
  
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>test</p>
        {/* <a href="#" onClick={this.logout()}>LOGOUT</a> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(App);
