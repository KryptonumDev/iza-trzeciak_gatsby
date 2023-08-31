import React from 'react';
import styled from 'styled-components';
import Heading from '../../utils/Heading';
import Markdown from '../../utils/Markdown';
import Image from '../atoms/Image';
import { Clamp } from '../../utils/functions';

const TextSection = ({ data: { heading, paragraph, text, list } }) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h2' className='h3'>{heading}</Heading>
        <Markdown className='paragraph'>{paragraph}</Markdown>
      </header>
      <div className="copy">
        <Markdown className='text'>{text}</Markdown>
        <ul className='list'>
          {list.map((item, i) => (
            <li key={i}>
              <Image data={item.img} />
              <Markdown className='title'>{item.title}</Markdown>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: flex-start;
  gap: ${Clamp(32, 48, 48, 'px')} ${Clamp(64, 82, 110, 'px')};
  header {
    h2 {
      margin-bottom: ${Clamp(24, 32, 40, 'px')};
    }
    .paragraph {
      > :not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  .copy {
    .text {
      margin-bottom: ${Clamp(16, 24, 24, 'px')};
    }
    .list {
      list-style-type: none;
      > li {
        &:not(:last-child){
          margin-bottom: 20px;
        }
        .title {
          margin-top: calc(48px / 2 - .75em);
        }
        display: grid;
        grid-template-columns: 48px 1fr;
        gap: 8px;
        align-items: flex-start;
      }
    }
  }
  @media (min-width: 1000px){
    grid-template-columns: 1fr 1fr;
    header {
      border-right: 1px solid var(--primary-400);
      padding-right: 32px;
    }
  }
  @media (max-width: 999px){
    header {
      h2 {
        width: fit-content;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--primary-400);
      }
    }
  }
`

export default TextSection;