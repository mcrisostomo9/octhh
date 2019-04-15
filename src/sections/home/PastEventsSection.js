import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import bg from "../../img/pe_bg.png";
import mq from "../../utils/mq";

const StyledSectionContainer = styled(SectionContainer)`
  background: url(${bg});
`;

const ItemContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  flex-basis: 100%;
  cursor: pointer;

  :hover {
    filter: opacity(90%);
  }

  ${mq.a768} {
    flex-basis: 45%;
    margin-bottom: 3rem;
  }

  a {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.a768} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const PastEventsSection = () => (
  <StaticQuery
    query={graphql`
      query PastEventsPost {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "event-post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                googleDriveLink
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const events = data.allMarkdownRemark.edges;
      return (
        <StyledSectionContainer>
          <SectionTitle title="Past Events" />
          <EventsContainer>
            {events.map((i, index) => {
              const { title, image, googleDriveLink } = i.node.frontmatter;
              return (
                <ItemContainer key={index}>
                  <a
                    href={googleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      fluid={image.childImageSharp.fluid}
                      style={{ height: "100%" }}
                    />
                    <Title>{title}</Title>
                  </a>
                </ItemContainer>
              );
            })}
          </EventsContainer>
        </StyledSectionContainer>
      );
    }}
  />
);

export default PastEventsSection;
