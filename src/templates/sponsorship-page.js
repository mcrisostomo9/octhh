import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/heroSection/heroSection";
import SponsorsSection from "../sections/sponsorship/SponsorsSection";
import SponsorFormSection from "../sections/sponsorship/SponsorFormSection";

export const SponsorshipPageTemplate = ({ heroSection, sponsorsSection }) => (
  <>
    <HeroSection data={heroSection} />
    <SponsorsSection sponsors={sponsorsSection} />
    <SponsorFormSection />
  </>
);

SponsorshipPageTemplate.propTypes = {
  heroSection: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  sponsorsSection: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const SponsorshipPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SponsorshipPageTemplate
        heroSection={frontmatter.heroSection}
        sponsorsSection={frontmatter.sponsorsSection}
      />
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
        sponsorsSection {
          sponsor
          logo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          website
        }
      }
    }
  }
`;
