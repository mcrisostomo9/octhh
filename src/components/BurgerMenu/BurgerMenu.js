import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

const BurgerContainer = styled.div`
  @media (min-width: 1088px) {
    display: none;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 30px;
    top: 22px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
    height: 3px !important;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: var(--dark-blue);
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    right: 20px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: var(--dark-blue);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 16px;
    outline: none;
  }
`;

const BurgerMenu = () => (
  <BurgerContainer>
    <Menu right>
      <Link id="home" className="menu-item" to="/">
        Home
      </Link>
      <Link id="about" className="menu-item" to="/about">
        About
      </Link>
      <Link id="sponsorship" className="menu-item" to="/sponsorship">
        Sponsorship
      </Link>
      <Link id="contact" className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
  </BurgerContainer>
);

export default BurgerMenu;
