import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <img className="main-burger" src={mainBurger} />
      <div className="slogan">i'm lovin' it</div>
    </div>
  );
}

export default Home;
