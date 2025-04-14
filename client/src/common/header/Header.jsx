import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const location = useLocation().pathname;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              as={Link}
              to="/ordernow"
              className={location === "/ordernow" ? "active" : ""}
            >
              Order Now
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/promotions"
              className={location === "/promotions" ? "active" : ""}
            >
              Promotions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contactus"
              className={location === "/contactus" ? "active" : ""}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/signin"
              className={location === "/signin" ? "active" : ""}
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
