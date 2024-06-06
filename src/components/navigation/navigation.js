import React from "react";
import logo_pic from './twitter_header_photo_1.png';
import './navigation.css';


const Navigation = () => {
  return (
    <nav>
      <div className="image">
        <a href="home">
          <img alt='Logo' src={logo_pic}/>
        </a>
      </div>
      <div className="all_nav">
        <div className="left_nav">
          <a href="home">Home</a>
          <a href="news">News</a>
          <a href="compare">Compare</a>
          <a href="about">About</a>
        </div>
        <div className="right_nav">
          <a href="signin">Sign In</a>
          <a href="register">Register</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;