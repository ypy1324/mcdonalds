import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CategoryCanvas from "./CategoryCanvas";

function Category() {
  const navigate = useNavigate();
  const categories = [
    "Breakfast",
    "Beef",
    "Chicken",
    "Sides",
    "Desserts",
    "Beverages",
    "McCafe",
  ];

  useEffect(() => {
    navigate("/ordernow/Breakfast");
  }, []);

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
