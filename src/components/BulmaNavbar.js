import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import mq from "../utils/mq";

const Nav = styled.nav`
  background-color: #646464 !important;
  overflow-x: hidden;
  display: none;

  @media (min-width: 1088px) {
    display: block;
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

const ItemContainer = styled.div`
  a {
    font-size: 18px;
    font-weight: bold;
  }
`;

function BulmaNavbar() {
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
        </div>
        <div id="navMenu" className="navbar-menu">
          <ItemContainer className="navbar-end">
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/sponsorship" className="navbar-item">
              Sponsorship
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </ItemContainer>
        </div>
      </Container>
    </Nav>
  );
}

export default BulmaNavbar;
