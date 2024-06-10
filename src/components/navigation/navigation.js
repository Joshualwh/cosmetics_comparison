import React from "react";
import logo_pic from './twitter_header_photo_1.png';
import './navigation.css';


const Navigation = ({onRouteChange}) => {
  return (
    <nav>
      <div className="px-3 text-bg-body d-flex align-items-center">
        <ul className="col nav text-start mb-md-0">
          <li><a href="#" onClick={() => onRouteChange('home')} className="nav-link px-2 text-body">Home</a></li>
          {/* <li><a href="#" className="nav-link px-2 text-body">Compare</a></li> */}
          <li><a href="#" className="nav-link px-2 text-body">About</a></li>
        </ul>
        <div className="col image">
          <a href="home"><img alt='Logo' src={logo_pic}/></a>
        </div>
        <div className="col text-end">
          <button onClick={() => onRouteChange('signin')} type="button" className="btn btn-outline-dark mx-2">Sign In</button>
          <button onClick={() => onRouteChange('signup')} type="button" className="btn btn-dark mx-2">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;