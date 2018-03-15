import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from '../src/components/MainComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Touch App Events
        </p>
        <MainComponent />
      </div>
    );
  }
}

export default App;
