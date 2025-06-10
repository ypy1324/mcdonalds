import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import firebase from "../../firebase";
import "./Header.css";

function Header() {
  const navLink = ["Order Now", "Promotions", "Contact Us"];
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

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
              let linkLower = link.toLowerCase().replace(" ", "");
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
            {user.accessToken ? (
              <Dropdown>
                <Dropdown.Toggle className="sign-in-user">
                  Hello, Mark!
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item>
                    <NavLink to="/profile" className="dropdown-items">
                      <FaRegUser size="1.5rem" />
                      <a className="dropdown-text">Profile</a>
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => logoutHandler()}>
                    <NavLink className="dropdown-items">
                      <MdLogout size="1.5rem" />
                      <a className="dropdown-text">Logout</a>
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Sign In
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
