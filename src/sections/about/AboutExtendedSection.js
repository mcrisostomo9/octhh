import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import mq from "../../utils/mq";

const StyledSectionContainer = styled(SectionContainer)`
  ${mq.a992} {
    padding: 60px 40px;
  }

  ${mq.a1200} {
    padding: 75px 40px;
  }
`;

const Text = styled.p`
  white-space: pre-line;
  max-width: var(--max-width-laptop);
  margin: 0 auto;

  ${mq.a1400} {
    max-width: var(--max-width-desktop);
  }
`;

const AboutExtendedSection = ({ text }) => {
  return (
    <StyledSectionContainer>
      <Text>{text}</Text>
    </StyledSectionContainer>
  );
};

export default AboutExtendedSection;
