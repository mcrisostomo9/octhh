import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import fluidTypography from "../../utils/fluidTypography";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import mq from "../../utils/mq";

const Base = styled.div`
  margin-bottom: 0.5rem;
  ${fluidTypography(320, 1980, 16, 28)};
`;

const Date = styled(Base)``;
const Time = styled(Base)``;
const Name = styled(Base)``;
const Address = styled(Base)``;
const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`;

const ParkingBlurb = styled.p`
  white-space: pre-line;
  margin: 2rem 0;
`;

const StyledLink = styled.a`
  display: block;
  max-width: 150px;
  margin: 20px auto 0;

  ${mq.a992} {
    max-width: 230px;
  }

  ${mq.a1200} {
    margin-top: 40px;
  }
`;

const LocationSection = ({
  data: {
    date,
    eventTimeRange,
    venueName,
    venueAddress,
    coordinates,
    parkingBlurb,
    rsvpLink,
  },
}) => {
  return (
    <SectionContainer>
      <SectionTitle title="Time + Place" />
      <Date>{date}</Date>
      <Time>{eventTimeRange}</Time>
      <StyledLink
        href={`https://${rsvpLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton text="RSVP" />
      </StyledLink>
      <Name>{venueName}</Name>
      <Address>{venueAddress}</Address>
      <GoogleMap coordinates={coordinates} />
      {parkingBlurb && <ParkingBlurb>{parkingBlurb}</ParkingBlurb>}
    </SectionContainer>
  );
};

export default LocationSection;
