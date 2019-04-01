import React from "react";
import Img from "gatsby-image";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styled from "styled-components";

const Base = styled.div`
  font-weight: bold;
`;

const PanelistContainer = styled.div`
  margin-bottom: 2rem;
`;

const Name = styled(Base)`
  margin-top: 1rem;
`;

const Position = styled(Base)`
  margin-bottom: 1.75rem;
`;

const Bio = styled.p``;

const PanelistSection = ({ data: { panelistItems } }) => {
  return (
    <SectionContainer>
      <SectionTitle title="Panelists" />
      {panelistItems.map(i => (
        <PanelistContainer>
          <Img fluid={i.image.childImageSharp.fluid} />
          <Name>{i.name}</Name>
          <Position>{i.position}</Position>
          <Bio>{i.biography}</Bio>
        </PanelistContainer>
      ))}
    </SectionContainer>
  );
};

export default PanelistSection;
