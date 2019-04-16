import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import mq from "../../utils/mq";

const StyledSectionContainer = styled(SectionContainer)`
  background-color: var(--dark-blue);
`;

const BoardContainer = styled.ul`
  margin: 3rem auto 0;
  max-width: var(--max-width-desktop);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 2rem;
  justify-items: center;

  ${mq.a768} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq.a1200} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
  }
`;

const Individual = styled.li`
  display: flex;
  flex-direction: column;
  //align-items: start;
  width: 100%;
`;

const Name = styled.h3`
  color: #fff;
  font-weight: bold;
`;

const Position = styled.h4`
  color: var(--gold);
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
