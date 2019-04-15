import React, { Component } from 'react';
import CardContainer from './CardContainer.js';
import Header from './Header.js';
import './App.css';

class App extends Component {
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
