import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  const navLink = ["Order Now", "Promotions", "Contact Us"];

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {navLink.map((link, i) => {
              const linkLower = link.toLowerCase().replace(" ", "");
              return (
                <NavLink
                  key={i}
                  to={"/" + linkLower}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                >
                  {link}
                </NavLink>
              );
            })}
          </Nav>
          <Nav>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "nav-link active-nav" : "nav-link"
              }
            >
              Sign In
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
