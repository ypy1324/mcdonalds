import React from "react";
import { NavLink } from "react-router-dom";
import CategoryCanvas from "./CategoryCanvas";
import "./OrderNow.css";

function Category() {
  const categories = [
    "All",
    "Breakfast",
    "Beef",
    "Chicken",
    "Wraps",
    "Snacks & Sides",
    "Desserts",
    "Beverages",
    "Happy Meal",
  ];

  return (
    <div className="category-wrapper">
      <div className="small-screen">
        <CategoryCanvas />
      </div>
      <div className="large-screen">
        {categories.map((category, i) => {
          return (
            <NavLink
              key={i}
              to={`/ordernow/${category}`}
              className={({ isActive }) =>
                isActive ? "category active-category" : "category"
              }
            >
              {category}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
