import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/heroSection/heroSection";
import AboutExtendedSection from "../sections/about/AboutExtendedSection";
import BoardOfDirectorsSection from "../sections/about/BoardOfDirectorsSection";
import ContactForm from "../components/ContactForm/ContactForm";

export const AboutPageTemplate = ({
  heroSection,
  aboutSectionExtended,
  boardOfDirectorsSection,
}) => (
  <>
    <HeroSection data={heroSection} />
    <AboutExtendedSection text={aboutSectionExtended} />
    <BoardOfDirectorsSection board={boardOfDirectorsSection} />
    <ContactForm />
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
      <AboutPageTemplate
        heroSection={frontmatter.heroSection}
        aboutSectionExtended={frontmatter.aboutSectionExtended}
        boardOfDirectorsSection={frontmatter.boardOfDirectorsSection}
      />
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
