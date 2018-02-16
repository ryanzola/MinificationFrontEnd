import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Main from './main/main';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
