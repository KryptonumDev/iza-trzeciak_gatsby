import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import CtaSection from "../components/sections/CtaSection";

const CooperationPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    ctaSection,
    contact,
    faq,
  } }
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Paragraph,
        hero_Cta,
      }} />
      <CtaSection data={ctaSection} />
      <Contact data={contact} />
      <Faq data={faq} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityCooperation {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
      ctaSection {
        heading
        paragraph
        cta {
          theme
          text
          href
        }
      }
      # Contact
      contact {
        heading
        paragraph
      }
      # FAQ
      faq {
        heading
        list {
          question
          answer
        }
      }
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export const Head = ({
  data: {
    page: { seo }
  },
  location: { pathname }
}) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
  />
)

export default CooperationPage;