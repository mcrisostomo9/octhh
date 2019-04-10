import React from "react";
import styled from "styled-components";
import fluidTypography from "../../utils/fluidTypography";

const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 6px;
  line-height: 1.25;

  ${fluidTypography(300, 1980, 35, 60)}
`;
const HeroTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default HeroTitle;
