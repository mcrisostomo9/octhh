import React from "react";
import styled from "styled-components";
import fluidTypography from "../../utils/fluidTypography";

const Text = styled.h3`
  font-weight: bold;
  ${fluidTypography(320, 1980, 16, 30)};
  color: #000;
`;

const H3 = ({ children, className }) => {
  return <Text className={className}>{children}</Text>;
};

export default H3;
