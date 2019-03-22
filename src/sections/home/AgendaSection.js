import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
`;
const AgendaSection = ({ data: { agendaItems } }) => {
  console.log(agendaItems);
  return (
    <Container>
      {agendaItems.map(i => (
        <div>
          <div>{i.title}</div>
          <div>{i.timeRange}</div>
        </div>
      ))}
    </Container>
  );
};

export default AgendaSection;
