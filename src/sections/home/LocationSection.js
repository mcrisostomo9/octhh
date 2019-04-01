import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;

const Base = styled.div`
  margin-bottom: 0.5rem;
`;

const Date = styled(Base)``;
const Name = styled(Base)``;
const Address = styled(Base)``;

const LocationSection = ({
  data: { date, eventTimeRange, venueName, map, parkingBlurb },
}) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Time + Place" />
      <Date>{date}</Date>
      {/*<a href={`https://${rsvpLink}`} target="_blank" rel="noopener noreferrer">*/}
      <Button text="RSVP" />
      {/*</a>*/}
      <Name>{venueName}</Name>

      <Address>hh</Address>
      <div>{parkingBlurb}</div>
    </StyledSectionContainer>
  );
};

export default LocationSection;
