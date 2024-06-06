import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Slideshow from './components/slideshow/slideshow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Slideshow/>
      </div>
    );
  }
}

export default App;
