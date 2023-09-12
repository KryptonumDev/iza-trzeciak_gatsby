import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import CtaSection from "../components/sections/CtaSection";
import TextSection from "../components/sections/TextSection";

const CooperationPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    textSection,
    textSection2,
    ctaSection,
    textSection3,
    textSection4,
    textSection5,
    ctaSection2,
    textSection6,
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
      <TextSection data={textSection} />
      <TextSection data={textSection2} />
      <CtaSection data={ctaSection} />
      <TextSection data={textSection3} />
      <TextSection data={textSection4} />
      <TextSection data={textSection5} />
      <CtaSection data={ctaSection2} />
      <TextSection data={textSection6} />
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
      # Text Section
      textSection5 {
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
      # CTA Section
      ctaSection2 {
        heading
        paragraph
        cta {
          theme
          text
          href
        }
      }
      # Text Section
      textSection6 {
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
    page: { seo, faq }
  },
  location: { pathname }
}) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", path: '' },
      { name: "Współpraca", path: pathname },
    ]}
    schemaFaq={faq?.list}
  />
)

export default CooperationPage;