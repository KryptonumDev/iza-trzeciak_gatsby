import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";

const IndexPage = () => {
  return (
    <h1>Homepage</h1>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
      hero_Heading
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