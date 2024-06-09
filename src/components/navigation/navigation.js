import React from "react";
import logo_pic from './twitter_header_photo_1.png';
import './navigation.css';


const Navigation = ({onRouteChange}) => {
  return (
    <nav>
      <div className="image">
        <a href="home">
          <img alt='Logo' src={logo_pic}/>
        </a>
      </div>
      <div className="p-3 text-bg-dark d-flex flex-wrap align-items-center justify-content-between">
        <ul className="nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a onClick={() => onRouteChange('home')} className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Compare</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>
        <div className="text-end">
          <button onClick={() => onRouteChange('signin')} type="button" className="btn btn-outline-light me-2">Sign In</button>
          <button type="button" className="btn btn-light">Sign-up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;