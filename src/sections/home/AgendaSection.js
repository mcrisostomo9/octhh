import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
`;
const AgendaSection = ({ data: { agendaItems } }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Agenda" />
      {agendaItems.map(i => (
        <div>
          <div>{i.title}</div>
          <div>{i.timeRange}</div>
        </div>
      ))}
    </StyledSectionContainer>
  );
};

export default AgendaSection;
