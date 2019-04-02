import React from "react";
import styled from "styled-components";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Base = styled.div`
  margin-bottom: 0.5rem;
`;

const ItemContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
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

const Date = styled(Base)``;
const Name = styled(Base)``;
const Address = styled(Base)``;

const PastEventsSection = () => (
  <StaticQuery
    query={graphql`
      query PastEventsPost {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "event-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                templateKey
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
        <SectionContainer>
          <SectionTitle title="Past Events" />

          {events.map(i => {
            const { title, image, googleDriveLink } = i.node.frontmatter;
            return (
              <ItemContainer>
                <Img
                  fluid={image.childImageSharp.fluid}
                  style={{ height: "100%" }}
                />
                <Title>{title}</Title>
              </ItemContainer>
            );
          })}
        </SectionContainer>
      );
    }}
  />
);

export default PastEventsSection;
