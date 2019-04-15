import React from "react";
import Img from "gatsby-image";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styled from "styled-components";
import mq from "../../utils/mq";

const Base = styled.div`
  font-weight: bold;
`;

const PanelistContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-areas: "img" "text";

  ${mq.a992} {
    max-width: var(--max-width-desktop);
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "img text"
      "img text";
    grid-gap: 3rem;
  }

  .gatsby-image-wrapper {
    grid-area: img;
  }
`;

const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Name = styled(Base)`
  margin-top: 1rem;
`;

const Position = styled(Base)`
  margin-bottom: 1.75rem;
`;

const Bio = styled.p`
  white-space: pre-line;
`;

const PanelistSection = ({ data: { panelistItems } }) => {
  return (
    <SectionContainer>
      <SectionTitle title="Panelists" />
      {panelistItems.map((i, index) => (
        <PanelistContainer key={index}>
          <Img fluid={i.image.childImageSharp.fluid} />
          <TextContainer>
            <Name>{i.name}</Name>
            <Position>{i.position}</Position>
            <Bio>{i.biography}</Bio>
          </TextContainer>
        </PanelistContainer>
      ))}
    </SectionContainer>
  );
};

export default PanelistSection;
