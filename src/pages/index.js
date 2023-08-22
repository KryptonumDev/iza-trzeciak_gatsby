import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Hero from "../components/sections/Homepage/Hero";

const IndexPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
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