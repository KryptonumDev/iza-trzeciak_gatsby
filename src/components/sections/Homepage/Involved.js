import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';

const Involved = ({
  data: {
    involved_Heading,
    involved_Paragraph,
    involved_Cta,
    involved_List,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <Heading type="h2" className="h3">{involved_Heading}</Heading>
        <Markdown className='paragraph'>{involved_Paragraph}</Markdown>
        <Button data={involved_Cta} />
      </header>
      {involved_List.map((item, i) => (
        <div className="item" key={i}>
          <div className="iterator">
            <svg width='48' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill='var(--primary-100)' stroke='var(--primary-400)' strokeWidth='1' strokeDasharray='201 201' style={{ padding: '2px', overflow: 'visible' }}>
              <circle cx="32" cy="32" r="32" />
            </svg>
            <span>0{i+1}</span>
          </div>
          <Markdown>{item}</Markdown>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Clamp(16, 16, 32, 'px')};
  header {
    .paragraph {
      margin: ${Clamp(16, 16, 24, 'px')} 0 ${Clamp(24, 24, 32, 'px')};
    }
  }
  .item {
    padding: 0 ${Clamp(16, 16, 32, 'px')} ${Clamp(24, 24, 32, 'px')};
    border: 1px solid var(--primary-400);
    background-color: var(--primary-200);
    margin-top: 32px;
    .iterator {
      margin: -32px 0 16px;
      position: relative;
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        z-index: 2;
        position: relative;
      }
      svg {
        position: absolute;
      }
    }
    &:nth-of-type(1) svg { stroke-dasharray: calc(201 * .2) 201 }
    &:nth-of-type(2) svg { stroke-dasharray: calc(201 * .4) 201 }
    &:nth-of-type(3) svg { stroke-dasharray: calc(201 * .6) 201 }
    &:nth-of-type(4) svg { stroke-dasharray: calc(201 * .8) 201 }
    &:nth-of-type(5) svg { stroke-dasharray: calc(201 * 1) 201 }
  }
  @media (max-width: 1199px){
    grid-template-columns: 1fr 1fr;
    header, .item:last-of-type {
      grid-column: 3/1;
    }
  }
  @media (max-width: 849px){
    grid-template-columns: 1fr;
    header, .item:last-of-type {
      grid-column: unset;
    }
  }
`

export default Involved;