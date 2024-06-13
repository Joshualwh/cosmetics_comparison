import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Slideshow from './components/slideshow/slideshow';
import About from './components/about/about';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';

const initialState = {
  route: 'home',
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route_change) => {
    this.setState({route: route_change});
  }
  
  render() {
    const {route} = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {(() => {
        switch (route) {
          case 'home':
            return <Slideshow/>
          case 'about':
            return <About/>
          case 'signin':
            return <Signin/>
          case 'signup':
            return <Signup/>
          default:
            return <Slideshow/>
          }
        })()}
      </div>
    );
  }
}

export default App;