import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import mq from "../../utils/mq";
import fluidTypography from "../../utils/fluidTypography";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: var(--dark-blue);

  ${mq.a992} {
    padding: 60px 40px;
  }

  ${mq.a1200} {
    padding: 75px 40px;
  }
`;

const BoardContainer = styled.ul`
  margin: 3rem auto 0;
  max-width: var(--max-width-laptop);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 1.5rem;
  justify-items: center;

  ${mq.a768} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq.a1200} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
  }

  ${mq.a1400} {
    max-width: var(--max-width-desktop);
  }
`;

const Individual = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const Name = styled.h3`
  color: #fff;
  font-weight: bold;
  ${fluidTypography(320, 1980, 15, 18)}
`;

const Position = styled.h4`
  color: var(--gold);
  ${fluidTypography(320, 1980, 15, 18)}
`;

const BoardOfDirectorsSection = ({ board }) => (
  <StyledSectionContainer>
    <SectionTitle title="Board of Directors" color="white" />
    <BoardContainer>
      {board.map(i => (
        <Individual>
          <Name>{i.name}</Name>
          <Position>{i.position}</Position>
        </Individual>
      ))}
    </BoardContainer>
  </StyledSectionContainer>
);

export default BoardOfDirectorsSection;
