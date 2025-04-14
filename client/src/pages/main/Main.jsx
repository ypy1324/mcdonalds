import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";
// import Image from "react-bootstrap/Image";
import "./Main.css";

function Main() {
  return (
    <div className="main-wrapper">
      {/* <Image className="main-burger" src={mainBurger} /> */}
      <img className="main-burger" src={mainBurger} />
      <div className="slogan">i'm lovin' it</div>
    </div>
  );
}

export default Main;
