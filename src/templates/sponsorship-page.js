import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import HeroSection from "../components/heroSection/heroSection";
import Layout from "../components/Layout";

export const SponsorshipPageTemplate = ({ heroSection }) => (
  <>
    {/*<HeroSection data={heroSection} />*/}
    <div>hello</div>
  </>
);

SponsorshipPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const SponsorshipPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SponsorshipPageTemplate heroSection={frontmatter.heroSection} />
    </Layout>
  );
};

SponsorshipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SponsorshipPage;

export const sponsorshipPageQuery = graphql`
  query SponsorshipPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sponsorship-page" } }) {
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
      }
    }
  }
`;
