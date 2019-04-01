import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import H3 from "../../components/H3/H3";
import Button from "../../components/Button/Button";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;

const StyledH3 = styled(H3)`
  margin-bottom: 0.5rem;
`;
const Base = styled.div`
  margin-bottom: 0.5rem;
`;

const Date = styled(Base)``;
const Name = styled(Base)``;
const Address = styled(Base)``;

const NextEventSection = ({
  data: { title, date, locationName, locationAddress, rsvpLink },
}) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Next Event" />
      <StyledH3>{title}</StyledH3>
      <Date>{date}</Date>
      <Name>{locationName}</Name>
      <Address>{locationAddress}</Address>
      <a href={`https://${rsvpLink}`} target="_blank" rel="noopener noreferrer">
        <Button text="RSVP" />
      </a>
    </StyledSectionContainer>
  );
};

export default NextEventSection;
