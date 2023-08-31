import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Contact from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import CtaSection from "../components/sections/CtaSection";
import TextSection from "../components/sections/TextSection";
import Heading from "../utils/Heading";
import Cooperation from "../components/sections/Services/Cooperation";

const ServicesPage = ({
  data: { page: {
    hero_Heading,
    ctaSection,
    textSection,
    textSection2,
    textSection3,
    textSection4,
    cooperation_Heading,
    cooperation_Paragraph,
    cooperation_CtaParagraph,
    cooperation_Cta,
    cooperation_List,
    contact,
    faq,
  } }
}) => {
  return (
    <>
      <Heading level='h1'>{hero_Heading}</Heading>
      <CtaSection data={ctaSection} />
      <TextSection data={textSection} />
      <TextSection data={textSection2} />
      <TextSection data={textSection3} />
      <TextSection data={textSection4} />
      <Cooperation data={{
        cooperation_Heading,
        cooperation_Paragraph,
        cooperation_CtaParagraph,
        cooperation_Cta,
        cooperation_List,
      }} />
      <Contact data={contact} />
      <Faq data={faq} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityServices {
      # Hero
      hero_Heading
      # CTA Section
      ctaSection {
        heading
        paragraph
        cta {
          theme
          text
          href
        }
      }
      # Text Section
      textSection {
        heading
        paragraph
        text
        list {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED width: 48, height: 48)
            }
          }
          title
        }
      }
      # Text Section
      textSection2 {
        heading
        paragraph
        text
        list {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED width: 48, height: 48)
            }
          }
          title
        }
      }
      # Text Section
      textSection3 {
        heading
        paragraph
        text
        list {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED width: 48, height: 48)
            }
          }
          title
        }
      }
      # Text Section
      textSection4 {
        heading
        paragraph
        text
        list {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED width: 48, height: 48)
            }
          }
          title
        }
      }
      # Cooperation
      cooperation_Heading
      cooperation_Paragraph
      cooperation_CtaParagraph
      cooperation_Cta {
        theme
        text
        href
      }
      cooperation_List {
        title
        description
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

export default ServicesPage;