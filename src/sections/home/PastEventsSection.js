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
          {/*<Img*/}
          {/*fluid={data.hero.childImageSharp.fluid}*/}
          {/*style={{ height: "100%" }}*/}
          {/*/>*/}
          {events.map(i => {
            const { title } = i.node.frontmatter;
            return <div>{title}</div>;
          })}
        </SectionContainer>
      );
    }}
  />
);

export default PastEventsSection;
