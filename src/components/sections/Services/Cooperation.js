import React from 'react';
import styled from 'styled-components';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import { Clamp } from '../../../utils/functions';

const Cooperation = ({
  data: {
    cooperation_Heading,
    cooperation_Paragraph,
    cooperation_CtaParagraph,
    cooperation_Cta,
    cooperation_List,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h2'>{cooperation_Heading}</Heading>
        <Markdown className='paragraph'>{cooperation_Paragraph}</Markdown>
      </header>
      <div className="cta-container">
        <Markdown className='paragraph'>{cooperation_CtaParagraph}</Markdown>
        {cooperation_Cta && (
          <Button data={cooperation_Cta} />
        )}
      </div>
      <ol className="list">
        {cooperation_List.map((item, i) => (
          <li key={i}>
            <span>
              <Markdown className='title'>{item.title}</Markdown>
              <Markdown className='description'>{item.description}</Markdown>
            </span>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-areas: 'header' 'list' 'cta';
  @media (min-width: 1000px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'header list' 'cta list';
  }
  gap: ${Clamp(24, 32, 32, 'px')} ${Clamp(64, 82, 142, 'px')};
  header {
    grid-area: header;
    .paragraph {
      margin-top: ${Clamp(24, 32, 32, 'px')}
    }
  }
  .paragraph {
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  .cta-container {
    grid-area: cta;
    .paragraph {
      margin-bottom: 24px;
    }
  }
  .list {
    grid-area: list;
    list-style-type: none;
    counter-reset: counter;
    li {
      counter-increment: counter;
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 24px;
      padding-top: 12px;
      .title {
        margin-bottom: 12px;
        color: var(--primary-600);
      }
      &::before {
        content: counter(counter);
        color: var(--primary-600);
      }
      &:nth-child(-n+9)::before {
        content: "0" counter(counter);
      }
      &:not(:last-child){
        padding-bottom: 12px;
        .description {
          position: relative;
          &::before {
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            left: -47px;
            top: 0;
            border-left: 1px dashed var(--primary-400);
          }
        }
      }
    }
  }
`

export default Cooperation;