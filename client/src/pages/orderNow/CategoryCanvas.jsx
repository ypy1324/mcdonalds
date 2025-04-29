import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./OrderNow.css";

function CategoryCanvas() {
  const [showMenu, setShowMenu] = useState(false);
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

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Menu
      </Button>
      <Offcanvas className="off-canvas" show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="canvas-title">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {categories.map((category, i) => {
            return (
              <NavLink
                key={i}
                to={`/ordernow/${category}`}
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "category active-category" : "category"
                }
              >
                {category}
              </NavLink>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default CategoryCanvas;
