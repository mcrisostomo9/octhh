import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 40px;
  text-align: center;
`;

const SectionContainer = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default SectionContainer;
