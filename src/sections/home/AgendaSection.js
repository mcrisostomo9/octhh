import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import mq from "../../utils/mq";
import fluidTypography from "../../utils/fluidTypography";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;

const ItemContainer = styled.div`
  //margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 1rem;
  ${mq.a992} {
    flex-direction: row;
    grid-template-columns: 1fr 1fr 2fr;
    border-top: 1px #a3a3a3 solid;
    border-bottom: 1px #a3a3a3 solid;
    text-align: left;
  }
`;

const Time = styled.div`
  color: var(--blue);
  margin-bottom: 0.25rem;
  ${fluidTypography(320, 1980, 16, 30)};
`;

const ItemTitle = styled.div`
  font-weight: bold;
  ${fluidTypography(320, 1980, 16, 22)};
`;

const ItemDescription = styled(ItemTitle)`
  font-weight: normal;
`;

const AgendaContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  //
  // ${mq.a992} {
  //   flex-direction: row;
  // }
`;

const AgendaSection = ({ data: { agendaItems } }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Agenda" />
      <AgendaContainer>
        {agendaItems.map(i => (
          <ItemContainer>
            <Time>{i.timeRange}</Time>
            <ItemTitle>{i.title}</ItemTitle>
            <ItemDescription>{i.agendaDescription}</ItemDescription>
          </ItemContainer>
        ))}
      </AgendaContainer>
    </StyledSectionContainer>
  );
};

export default AgendaSection;
