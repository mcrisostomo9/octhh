import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/heroSection/heroSection";

export const AboutPageTemplate = ({ heroSection }) => (
  <>
    <HeroSection data={heroSection} />
  </>
);

AboutPageTemplate.propTypes = {
  heroSection: PropTypes.object.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate heroSection={frontmatter.heroSection} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        heroSection {
          heroImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
        aboutSectionExtended
        boardOfDirectorsSection {
          name
          position
        }
      }
    }
  }
`;
