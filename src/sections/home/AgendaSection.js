import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;

const ItemContainer = styled.div`
  margin-bottom: 1rem;
`;

const Time = styled.div`
  color: var(--blue);
  margin-bottom: 0.25rem;
`;

const ItemTitle = styled.div`
  font-weight: bold;
`;

const AgendaSection = ({ data: { agendaItems } }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Agenda" />
      {agendaItems.map(i => (
        <ItemContainer>
          <Time>{i.timeRange}</Time>
          <ItemTitle>{i.title}</ItemTitle>
        </ItemContainer>
      ))}
    </StyledSectionContainer>
  );
};

export default AgendaSection;
