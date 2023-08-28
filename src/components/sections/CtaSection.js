import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../utils/functions';
import Heading from '../../utils/Heading';
import Markdown from '../../utils/Markdown';
import Button from '../atoms/Button';

const CtaSection = ({ data: { heading, paragraph, cta } }) => {
  return (
    <Wrapper className='sec-wo-margin focus-light'>
      <Heading level='h2' className='h3'>{heading}</Heading>
      <div className="line" aria-hidden='true'></div>
      <div>
        <Markdown className='paragraph'>{paragraph}</Markdown>
        <Button data={cta} variant='light' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--primary-600);
  color: var(--primary-300);
  padding: ${Clamp(32, 40, 80, 'px')} 0;
  display: grid;
  @media (min-width: 1100px){
    grid-template-columns: 1fr auto 1fr;
  }
  align-items: center;
  gap: ${Clamp(32, 42, 42, 'px')} 96px;
  .line {
    height: 100%;
    width: 1px;
    background-color: var(--primary-500);
  }
  @media (max-width: 1099px){
    .line {
      height: 1px;
      width: 100%;
    }
  }
  .paragraph {
    p:not(:last-child){
      margin-bottom: 16px;
    }
    margin-bottom: ${Clamp(16, 24, 24, 'px')};
  }
`

export default CtaSection;