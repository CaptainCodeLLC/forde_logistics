import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../src/components/global/navigation';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;
