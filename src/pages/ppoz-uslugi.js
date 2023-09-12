import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Contact from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import CtaSection from "../components/sections/CtaSection";
import TextSection from "../components/sections/TextSection";
import Cooperation from "../components/sections/Services/Cooperation";
import Hero from "../components/sections/Services/Hero";
import Timeline from "../components/sections/Services/Timeline";
import Services from "../components/sections/Services/Services";

const ServicesPage = ({
  data: { page: {
    hero_Heading,
    experience_Heading,
    experience_List,
    courses_Heading,
    courses_List,
    ctaSection,
    textSection,
    textSection2,
    textSection3,
    textSection4,
    services_Heading,
    services_Paragraph,
    services_List,
    services_SecondParagraph,
    cooperation_Heading,
    cooperation_Paragraph,
    cooperation_CtaParagraph,
    cooperation_Cta,
    cooperation_List,
    contact,
    faq,
  },
  global
}}) => {
  return (
    <>
      <Hero heading={hero_Heading} image={global.image} />
      <Timeline
        heading={experience_Heading}
        list={experience_List}
        onRight={true}
      />
      <Timeline
        heading={courses_Heading}
        list={courses_List}
      />
      <CtaSection data={ctaSection} />
      <TextSection data={textSection} />
      <TextSection data={textSection2} />
      <TextSection data={textSection3} />
      <TextSection data={textSection4} />
      <Services data={{
        services_Heading,
        services_Paragraph,
        services_List,
        services_SecondParagraph,
      }} />
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
      # Experience
      experience_Heading
      experience_List {
        year: title
        description
      }
      # Courses
      courses_Heading
      courses_List {
        year: title
        description
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
      # Services
      services_Heading
      services_Paragraph
      services_List {
        title
        description
      }
      services_SecondParagraph
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
    global: sanityGlobal {
      image {
        asset {
          altText
          gatsbyImageData(placeholder: NONE, width: 48, height: 48)
        }
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
      { name: "Usługi", path: pathname },
    ]}
    schemaFaq={faq?.list}
  />
)

export default ServicesPage;