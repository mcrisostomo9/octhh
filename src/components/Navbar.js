import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Logo = styled.img`
  width: 50px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  background: #646464;

  a {
    line-height: 0;
  }

  @media (min-width: 1088px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <>
      <BurgerMenu />
      <NavContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </NavContainer>
    </>
  );
}

export default Navbar;
