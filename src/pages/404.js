import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";

const NotFoundPage = () => {
  return (
    <h1>Not found</h1>
  )
}

export const query = graphql`
  query {
    page: sanityNotFound {
      # Hero
      hero_Heading
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

export default NotFoundPage;