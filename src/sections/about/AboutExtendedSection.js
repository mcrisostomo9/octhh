import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const Text = styled.p`
  white-space: pre-line;
`;

const AboutExtendedSection = ({ text }) => {
  console.log(text);
  return (
    <SectionContainer>
      <Text>{text}</Text>
    </SectionContainer>
  );
};

export default AboutExtendedSection;
