import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 6px;
  line-height: 1.25;
`;
const HeroTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default HeroTitle;
