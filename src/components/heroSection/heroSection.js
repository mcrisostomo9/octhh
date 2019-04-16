import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import mq from "../../utils/mq";
import HeroTitle from "../HeroTitle/HeroTitle";
import Description from "../Description/Description";

const Container = styled.div`
  position: relative;
  height: 400px;

  ${mq.a375} {
    height: 500px;
  }

  ${mq.a768} {
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 32px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  * {
    color: #fff;
  }
`;

const StyledDescription = styled(Description)`
  margin-top: 20px;
`;

const HeroSection = ({ data: { title, description, heroImage } }) => {
  return (
    <Container>
      <Img fluid={heroImage.childImageSharp.fluid} style={{ height: "100%" }} />
      <TextContainer>
        <HeroTitle title={title} />
        {description && <StyledDescription text={description} />}
      </TextContainer>
    </Container>
  );
};

export default HeroSection;
