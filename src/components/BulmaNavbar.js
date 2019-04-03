import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import Button from "./Button/Button";

const Logo = styled.img`
  //width: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

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
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <Container className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo
                src={logo}
                alt="OC Tech Happy Hour"
                width="50"
                height="auto"
              />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Button className="navbar-item" text="Become a Member" />
            </div>
          </div>
        </Container>
      </nav>
    );
  }
};

export default Navbar;
