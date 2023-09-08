import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import PortableContent from "../utils/PortableContent";
import Heading from "../utils/Heading";

const PrivacyPolicyPage = ({
  data: { page: {
    hero_Heading,
    _rawContent
  } }
}) => {
  return (
    <>
      <Heading level='h1'>{hero_Heading}</Heading>
      <PortableContent data={_rawContent} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPrivacyPolicy {
      # Hero
      hero_Heading
      # Content
      _rawContent
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
    breadcrumbs={[
      { name: "Strona główna", path: '' },
      { name: "Polityka prywatności", path: pathname },
    ]}
  />
)

export default PrivacyPolicyPage;