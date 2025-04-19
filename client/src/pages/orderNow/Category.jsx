import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuCanvas from "./MenuCanvas";
import "./OrderNow.css";

function Category() {
  const location = useLocation().pathname;

  return (
    <div className="category-wrapper">
      <div className="small-screen">
        <MenuCanvas />
      </div>
      <div className="large-screen">
        <Link className="category">All</Link>
        <Link className="category">Breakfast</Link>
        <Link className="category">Beef</Link>
        <Link className="category">Chicken</Link>
        <Link className="category">Wraps</Link>
        <Link className="category">Snacks & Sides</Link>
        <Link className="category">Desserts</Link>
        <Link className="category">Beverages</Link>
        <Link className="category">Happy Meal</Link>
      </div>
    </div>
  );
}

export default Category;
