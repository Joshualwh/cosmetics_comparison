import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';
import img1 from './leo_visions-I62h3Pv-JSI-unsplash.jpg';
import img2 from './lisa-yount-W2pwbgyn5RE-unsplash.jpg';
import img3 from './wes-hicks-ZW6RUvsaFTc-unsplash.jpg';

class Slideshow extends Component {
  render() {
    const images = [img1, img2, img3];
    console.log(images[0]);
    return(
      <Slide>
        <div className="each-slide-effect">
          <div style={{backgroundImage: `url(${images[0]})`}}>
              <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
              <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
  }
}

export default Slideshow;