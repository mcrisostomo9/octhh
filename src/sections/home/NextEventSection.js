import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f2f2f2;
`;

const NextEventSection = ({ data: { title, date, rsvpLink } }) => {
  return (
    <Container className="container is-fluid">
      <h2>NEXT EVENT</h2>
      <div>{title}</div>
      <div>{date}</div>
      <div>{rsvpLink}</div>
    </Container>
  );
};

export default NextEventSection;
