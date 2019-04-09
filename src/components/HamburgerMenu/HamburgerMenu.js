import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  position: relative;

  .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }

  .toggler:checked + .hamburger > div:before,
  .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }
`;

const Icon = styled.input`
  :checked {
    transform: rotate(135deg);
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;

    ::before,
    ::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: inherit;
    }

    ::after {
      top: 10px;
    }
  }
`;

const Menu = styled.div``;

class HamburgerMenu extends React.Component {
  render() {
    return (
      <Container>
        <Icon type="checkbox" className="toggler" />
        <Hamburger className="hamburger">
          <div />
        </Hamburger>
        <Menu>
          <div>
            <div>
              <ul>
                <Link to="/about">link</Link>
              </ul>
            </div>
          </div>
        </Menu>
      </Container>
    );
  }
}

export default HamburgerMenu;
