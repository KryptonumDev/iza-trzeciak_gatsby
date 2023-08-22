import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
import Heading from "../utils/Heading";
import Markdown from "../utils/Markdown";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import { Clamp } from "../utils/functions";

const NotFoundPage = ({
  data: { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
  }}
}) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h1'>{hero_Heading}</Heading>
        <Markdown className="paragraph">{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  header {
    max-width: 768px;
    margin: 0 auto;
    @media (min-width: 500px){
      text-align: center;
    }
  }
  .paragraph {
    font-size: ${Clamp(28, 32, 32)};
    margin: ${Clamp(16, 16, 24, 'px')} 0 ${Clamp(32, 32, 48, 'px')};
  }
`

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