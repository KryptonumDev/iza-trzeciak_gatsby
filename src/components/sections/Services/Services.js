import React from 'react';
import styled from 'styled-components';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import { Clamp } from '../../../utils/functions';

const Services = ({
  data: {
    services_Heading,
    services_Paragraph,
    services_List,
    services_SecondParagraph,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h2'>{services_Heading}</Heading>
        <Markdown className='paragraph'>{services_Paragraph}</Markdown>
      </header>
      <ul className='list'>
        {services_List.map(({ title, description }, i) => (
          <li key={i}>
            <Heading level='h3'>{title}</Heading>
            <ul>
              {description.map((item, i) => (
                <li key={i}>
                  <Markdown>{item}</Markdown>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Markdown className='secondParagraph'>{services_SecondParagraph}</Markdown>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    max-width: ${840/16}rem;
    margin: 0 auto ${Clamp(42, 58, 68, 'px')};
    @media (min-width: 500px){
      text-align: center;
    }
    h2 {
      margin-bottom: ${Clamp(24, 32, 32, 'px')};
    }
  }
  .list {
    li {
      list-style-type: none;
    }
    > li {
      display: grid;
      grid-template-columns: 1fr 2fr;
      @media (max-width: 999px){
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 649px){
        grid-template-columns: 1fr;
      }
      gap: 32px ${Clamp(32, 32, 144, 'px')};
      border-top: 1px solid var(--primary-400);
      border-bottom: 1px solid var(--primary-400);
      padding: ${Clamp(32, 42, 56, 'px')} ${Clamp(8, 12, 110, 'px')};
      @media (min-width: 1000px){
        padding-inline: 110px;
        column-gap: ${Clamp(32, 82, 144, 'px')};
      }
      h3 {
        word-wrap: break-all;
      }
      &:not(:last-child){
        margin-bottom: ${Clamp(24, 32, 48, 'px')};
      }
      > ul {
        > li:not(:last-child) {
          margin-bottom: ${Clamp(16, 24, 24, 'px')};
        }
      }
    }
  }
  .secondParagraph {
    max-width: ${628/16}rem;
    margin: ${Clamp(32, 48, 62, 'px')} auto 0;
  }
`

export default Services;