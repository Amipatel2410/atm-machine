import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './Account'

class App extends Component {
  render() {
    return (
      <div>
        <Account name={'Checking'} />
        <Account name={'Savings'} />
      </div>
    );
  }
}

export default App;
