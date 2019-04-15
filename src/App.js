import React, { Component } from 'react';
import CardContainer from './CardContainer.js';
import Header from './Header.js';
import './App.scss';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header/>
      <div className="content-wrapper">
        <CardContainer/>
      </div>
      </div>
    );
  }
}

export default App;
