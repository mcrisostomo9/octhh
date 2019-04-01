import * as React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #0080bb;
  margin-bottom: 20px;
`;

const SectionTitle = ({ title, className }) => {
  return <Title className={`${className} title is-4`}>{title}</Title>;
};

export default SectionTitle;
