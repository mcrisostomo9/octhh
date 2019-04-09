import React from "react";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";
import logo from "../img/logo.png";
import Button from "./Button/Button";
import mq from "../utils/mq";

const Logo = styled.img`
  width: 50px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  a {
    line-height: 0;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin-right: 10px;
  }

  ${mq.a768} {
    display: none;
  }
`;

const DesktopContainer = styled.div`
  display: none;
  ${mq.a768} {
    display: flex;
    flex-direction: row;
  }
`;

const MenuContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 visibility: visible;
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
 
 > div{
  background: rgba(24, 39, 51 , 0.85);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
 }
 
 > div > div{
 text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
 }


  // display: ${props => (props.open ? `flex` : `none`)};
`;

class Navbar extends React.Component {
  state = {
    mobileIsOpen: false,
  };

  handleMenuClick = () => {
    this.setState(prevState => ({
      mobileIsOpen: !prevState.mobileIsOpen,
    }));
  };
  render() {
    const { mobileIsOpen } = this.state;
    return (
      <>
        <NavContainer
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <MobileContainer>
            <Button text="Become a member" />
            <HamburgerMenu
              isOpen={mobileIsOpen}
              color="#fff"
              menuClicked={this.handleMenuClick}
              width={40}
              height={26}
              strokeWidth={3}
            />
          </MobileContainer>
          <DesktopContainer>
            <div>he</div>
            <div>he</div>
          </DesktopContainer>
        </NavContainer>
        <MenuContainer open={mobileIsOpen}>
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/sponsorship">Sponsorship</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </MenuContainer>
      </>
    );
  }
}

export default Navbar;
