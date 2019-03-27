import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;

const NextEventSection = ({ data: { title, date, rsvpLink } }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Next Event" />
      <div>{title}</div>
      <div>{date}</div>
      <div>{rsvpLink}</div>
    </StyledSectionContainer>
  );
};

export default NextEventSection;
