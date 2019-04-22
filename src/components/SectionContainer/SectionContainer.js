import * as React from "react";
import styled from "styled-components";
import mq from "../../utils/mq";

const Container = styled.section`
  padding: 30px 40px;
  text-align: center;

  ${mq.a768} {
    padding: 40px;
  }

  ${mq.a992} {
    padding: 60px 40px 20px;
  }

  ${mq.a1200} {
    padding: 75px 40px 20px;
  }
`;

const SectionContainer = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default SectionContainer;
