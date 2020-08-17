import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form } from "react-bootstrap";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <Navbar className={classes.colorNav} expand="lg">
      <Navbar.Brand className={classes.navBrand} href="#home">
        <Link className={classes.alink} to="/">
          Mahmoud Tohamy{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className={classes.toglle}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link className={classes.alink} to="/MyProjects">
            Projects{" "}
          </Link>
          <Link className={classes.alink} to="/AboutMe">
            About{" "}
          </Link>
          <Link className={classes.alink} to="/Contact">
            Contact{" "}
          </Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
