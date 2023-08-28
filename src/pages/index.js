import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Homepage/Services";
import Involved from "../components/sections/Homepage/Involved";
import Process from "../components/sections/Homepage/Process";
import Faq from "../components/sections/Faq";
import Contact from "../components/sections/Contact";

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
    involved_Paragraph,
    involved_Cta,
    involved_List,
    process_Heading,
    process_Subheading,
    process_Paragraph,
    contact,
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
        involved_Paragraph,
        involved_Cta,
        involved_List,
      }} />
      <Process data={{
        process_Heading,
        process_Subheading,
        process_Paragraph,
      }} />
      <Contact data={contact} />
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
      involved_Paragraph
      involved_Cta {
        theme
        text
        href
      }
      involved_List
      # Process
      process_Heading
      process_Subheading
      process_Paragraph
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
  }
}) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
  />
)

export default IndexPage;