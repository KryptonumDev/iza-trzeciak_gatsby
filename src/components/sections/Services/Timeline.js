import React from 'react';
import styled from 'styled-components';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import { Clamp } from '../../../utils/functions';

const Timeline = ({
  heading,
  list,
  onRight=false,
}) => {
  return (
    <Wrapper data-onright={onRight}>
      <Heading level='h2' className='h3'>{heading}</Heading>
      <ul className="wrapper">
        {list.map(({ year, description }, i) => (
          <li key={i}>
            <Markdown className='year'>{year}</Markdown>
            <Markdown className='description'>{description}</Markdown>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: ${800 / 16}rem;
  &[data-onright="true"]{
    margin-left: auto;
  }
  h2 {
    margin-bottom: ${Clamp(32, 32, 42, 'px')}
  }
  ul {
    li {
      display: grid;
      grid-template-columns: 92px 1fr;
      gap: ${Clamp(16, 40, 40, 'px')};
      .year {
        text-align: right;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          right: calc(${Clamp(16, 40, 40, 'px')} * -.5);
          top: 0;
          width: 1px;
          height: 100%;
          background-color: var(--primary-400);
        }
      }
      &:not(:last-child){
        margin-bottom: 24px;
        .year::before {
          height: calc(100% + 24px);
        }
      }
    }
  }
`

export default Timeline;