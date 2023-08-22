import React from "react"
import { graphql } from "gatsby";
import Seo from "../global/Seo";
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
        <Markdown components={{ p: 'h1' }}>{hero_Heading}</Markdown>
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
  h1 {
    margin-bottom: ${Clamp(16, 16, 24, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(28, 32, 32)};
    margin-bottom: ${Clamp(32, 32, 48, 'px')};
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