import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  * {
    color: #fff;
  }
`;

const HeroSection = ({ data: { title, description, heroImage } }) => {
  return (
    <Container>
      <Img fluid={heroImage.childImageSharp.fluid} style={{ height: "100%" }} />
      <TextContainer>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </TextContainer>
    </Container>
  );
};

export default HeroSection;
