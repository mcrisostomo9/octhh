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
                googleDriveLink
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
            const { title, image } = i.node.frontmatter;
            console.log(i);
            return (
              <div>
                {/*<Img*/}
                {/*fluid={image.childImageSharp.fluid}*/}
                {/*style={{ height: "100%" }}*/}
                {/*/>*/}
                <div>{title}</div>
              </div>
            );
          })}
        </SectionContainer>
      );
    }}
  />
);

export default PastEventsSection;
