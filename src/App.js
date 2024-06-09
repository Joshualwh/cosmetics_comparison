import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Slideshow from './components/slideshow/slideshow';
import Signin from './components/signin/signin';
import News from './components/news/news';

const initialState = {
  route: 'home',
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState(initialState);
    } else if (route === 'signin') {
      this.setState({route: route})
    }
    this.setState({route: route});
  }
  
  render() {
    const {route} = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ? <div>
            <Slideshow />
          </div>
        : (
          route === 'signin'
          ? <div>
              <Signin />
            </div>
          : <News />
        )
        }
      </div>
    );
  }
}

export default App;
