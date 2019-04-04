import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HeroSection from "../components/heroSection/heroSection";
import NextEventSection from "../sections/home/NextEventSection";
import LocationSection from "../sections/home/LocationSection";
import PanelistSection from "../sections/home/PanelistSection";
import AgendaSection from "../sections/home/AgendaSection";
import Layout from "../components/Layout";
import PastEventsSection from "../sections/home/PastEventsSection";

export const IndexPageTemplate = ({
  heroSection,
  nextEventSection,
  agendaSection,
  panelistSection,
  locationSection,
}) => (
  <>
    <HeroSection data={heroSection} />
    <NextEventSection data={nextEventSection} />
    {agendaSection.active && <AgendaSection data={agendaSection} />}
    {panelistSection.active && <PanelistSection data={panelistSection} />}
    <LocationSection data={locationSection} />
    <PastEventsSection />
  </>
);

IndexPageTemplate.propTypes = {
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroSection={frontmatter.heroSection}
        nextEventSection={frontmatter.nextEventSection}
        agendaSection={frontmatter.agendaSection}
        panelistSection={frontmatter.panelistSection}
        locationSection={frontmatter.locationSection}
        // image={frontmatter.image}
        // title={frontmatter.title}
        // heading={frontmatter.heading}
        // subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        nextEventSection {
          title
          date
          locationName
          locationAddress
          rsvpLink
        }
        agendaSection {
          active
          agendaItems {
            title
            timeRange
          }
        }
        panelistSection {
          active
          panelistItems {
            name
            position
            biography
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        locationSection {
          date
          eventTimeRange
          rsvpLink
          venueName
          map
          parkingBlurb
        }

        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
