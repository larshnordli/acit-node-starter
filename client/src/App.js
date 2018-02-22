import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
        <p className="App-intro">
          To get started, clone this repo and code away.
        </p>
      </div>
    );
  }
}

export default App;
