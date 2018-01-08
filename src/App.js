import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from './Components/Chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Super Cool Charts!</h1>
        </header>
        <Chart />
      </div>
    );
  }
}

export default App;
