import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import fluidTypography from "../../utils/fluidTypography";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Base = styled.div`
  margin-bottom: 0.5rem;
  ${fluidTypography(320, 1980, 16, 28)};
`;

const Date = styled(Base)``;
const Time = styled(Base)``;
const Name = styled(Base)``;
const Address = styled(Base)``;

const LocationSection = ({
  data: {
    date,
    eventTimeRange,
    venueName,
    venueAddress,
    coordinates,
    parkingBlurb,
  },
}) => {
  return (
    <SectionContainer>
      <SectionTitle title="Time + Place" />
      <Date>{date}</Date>
      <Time>{eventTimeRange}</Time>
      {/*<a href={`https://${rsvpLink}`} target="_blank" rel="noopener noreferrer">*/}
      <Button text="RSVP" />
      {/*</a>*/}
      <Name>{venueName}</Name>

      <Address>{venueAddress}</Address>
      <GoogleMap coordinates={coordinates} />
      <div>{parkingBlurb}</div>
    </SectionContainer>
  );
};

export default LocationSection;
