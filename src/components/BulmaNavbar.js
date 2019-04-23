import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import mq from "../utils/mq";

const Nav = styled.nav`
  background-color: #646464 !important;
  overflow-x: hidden;

  @media (min-width: 1088px) {
    background-color: transparent !important;
    padding-top: 1rem;
    position: absolute !important;
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: auto;

  ${mq.a1200} {
    width: 80px;
  }
`;

const Container = styled.div``;

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <Nav
        id="navbar"
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Container className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo src={logo} alt="OC Tech Happy Hour" />
            </Link>
            <div className="navbar-burger burger" data-target="navMenu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/sponsorship" className="navbar-item">
                Sponsorship
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </Nav>
    );
  }
};

export default Navbar;
