import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import mq from "../../utils/mq";
import fluidTypography from "../../utils/fluidTypography";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: #f2f2f2;
  ${mq.a1200} {
    padding-bottom: 40px;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: var(--max-width-laptop);

  margin: 0 auto 1rem;
  ${mq.a992} {
    grid-template-columns: 1fr 1fr 2fr;
    border-top: ${props => (props.firstItem ? `1px #a3a3a3 solid` : `none`)};
    border-bottom: 1px #a3a3a3 solid;
    text-align: left;
    align-items: center;
    padding: 2rem 0;
    grid-column-gap: 1rem;
    margin-bottom: 0;
  }

  ${mq.a1400} {
    max-width: var(--max-width-desktop);
  }
`;

const Time = styled.div`
  color: var(--blue);
  margin-bottom: 0.25rem;
  ${fluidTypography(320, 1980, 16, 30)};

  ${mq.a992} {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.div`
  font-weight: bold;
  ${fluidTypography(320, 1980, 16, 22)};
`;

const ItemDescription = styled(ItemTitle)`
  font-weight: normal;
`;

const AgendaContainer = styled.div``;

const AgendaSection = ({ data: { agendaItems } }) => {
  return (
    <StyledSectionContainer>
      <SectionTitle title="Agenda" />
      <AgendaContainer>
        {agendaItems.map((agenda, index) => {
          const firstItem = index === 0;
          return (
            <ItemContainer firstItem={firstItem} key={index}>
              <Time>{agenda.timeRange}</Time>
              <ItemTitle>{agenda.title}</ItemTitle>
              <ItemDescription>{agenda.agendaDescription}</ItemDescription>
            </ItemContainer>
          );
        })}
      </AgendaContainer>
    </StyledSectionContainer>
  );
};

export default AgendaSection;
