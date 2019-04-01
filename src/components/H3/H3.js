import React from "react";
import styled from "styled-components";

const Text = styled.h3`
  font-weight: bold;
  color: #000;
`;

const H3 = ({ children, className }) => {
  return <Text className={className}>{children}</Text>;
};

export default H3;
