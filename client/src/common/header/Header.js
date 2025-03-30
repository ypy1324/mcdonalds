import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header-wrapper">
      <img className="logo" src={logo} />
      <div className="nav">
        <div>Order Now</div>
        <div>Promotions</div>
        <div>Contact Us</div>
      </div>
      <div className="signin-btn">Sign In</div>
    </div>
  );
}

export default Header;
