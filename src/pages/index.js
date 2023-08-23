import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Hero from "../components/sections/Homepage/Hero";
import Services from "../components/sections/Homepage/Services";
import Involved from "../components/sections/Homepage/Involved";
import Process from "../components/sections/Homepage/Process";
import Faq from "../components/sections/Faq";

const IndexPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    services_Heading,
    services_Subheading,
    services_Paragraph,
    services_Cta,
    services_List,
    involved_Heading,
    involved_List,
    involved_Cta,
    process_Heading,
    process_Subheading,
    process_Paragraph,
    faq,
  }}
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Paragraph,
        hero_Cta,
      }} />
      <Services data={{
        services_Heading,
        services_Subheading,
        services_Paragraph,
        services_Cta,
        services_List
      }} />
      <Involved data={{
        involved_Heading,
        involved_List,
        involved_Cta,
      }} />
      <Process data={{
        process_Heading,
        process_Subheading,
        process_Paragraph,
      }} />
      <Faq data={faq} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
      # Services
      services_Heading
      services_Subheading
      services_Paragraph
      services_Cta {
        theme
        text
        href
      }
      services_List {
        title
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      # Involved
      involved_Heading
      involved_List
      involved_Cta {
        theme
        text
        href
      }
      # Process
      process_Heading
      process_Subheading
      process_Paragraph
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
  }
}) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
  />
)

export default IndexPage;