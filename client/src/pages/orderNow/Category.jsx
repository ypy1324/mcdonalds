import React from "react";
import { NavLink } from "react-router-dom";
import CategoryCanvas from "./CategoryCanvas";

function Category() {
  const categories = [
    "Breakfast",
    "Beef",
    "Chicken",
    "Wraps",
    "Sides",
    "Desserts",
    "Beverages",
    "McCafe",
    "Happy Meal",
  ];

  return (
    <div className="category-wrapper">
      <div className="category-small-screen">
        <CategoryCanvas />
      </div>
      <div className="category-large-screen">
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
