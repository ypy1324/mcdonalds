import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function MenuCanvas() {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="category">All</div>
          <div className="category">Breakfast</div>
          <div className="category">Beef</div>
          <div className="category">Chicken</div>
          <div className="category">Wraps</div>
          <div className="category">Snacks & Sides</div>
          <div className="category">Desserts</div>
          <div className="category">Beverages</div>
          <div className="category">Happy Meal</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MenuCanvas;
