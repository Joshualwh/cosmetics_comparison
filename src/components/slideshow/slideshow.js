import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';
import img1 from './leo_visions-I62h3Pv-JSI-unsplash.jpg';
import img2 from './lisa-yount-W2pwbgyn5RE-unsplash.jpg';
import img3 from './wes-hicks-ZW6RUvsaFTc-unsplash.jpg';

class Slideshow extends Component {
  render() {
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Slideshow;