import * as React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #0080bb;
`;

const SectionTitle = ({ title, className }) => {
  return <Title className={className}>{title}</Title>;
};

export default SectionTitle;
