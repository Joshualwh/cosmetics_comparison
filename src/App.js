import './App.css';
import React, { Component } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Navigation from './components/navigation/navigation';
import Slideshow from './components/slideshow/slideshow';
import About from './components/about/about';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';

const initialState = {
  route: 'home',
  is_signed_in: false,
  user: {
    id: '',
    name: '',
    email: ''  
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user :{
        id: data.id,
        name: data.name,
        email: data.secret
      }
    })
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
            return <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          case 'signup':
            return <Signup onRouteChange={this.onRouteChange}/>
          default:
            return <Slideshow/>
          }
        })()}
      </div>
    );
  }
}

export default App;