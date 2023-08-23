import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';

const Process = ({
  data: {
    process_Heading,
    process_Subheading,
    process_Paragraph,
  }
}) => {
  return (
    <Wrapper>
      <div>
        <div className="decorator" aria-hidden="true"><div></div><div></div></div>
        <header>
          <Heading level='h2'>{process_Heading}</Heading>
          <Heading level='h3'>{process_Subheading}</Heading>
        </header>
        <Markdown className='paragraph'>{process_Paragraph}</Markdown>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--primary-600);
  color: var(--primary-300);
  position: relative;
  padding: ${Clamp(48, 64, 64, 'px')} 0;
  &::before {
    content: '';
    width: 100vw;
    height: 100%;
    background-color: inherit;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: -1;
  }
  > div {
    max-width: 845px;
    margin: 0 auto;
  }
  .decorator {
    display: flex;
    @media (min-width: 499px){
      justify-content: center;
    }
    margin: 0 16px;
    div {
      width: 144px;
      height: 144px;
      border: 1px solid var(--primary-500);
      background-color: rgba(76, 105, 135, .20);
      border-radius: 50%;
      margin: 0 -16px;
    }
  }
  header {
    margin: ${Clamp(16, 24, 32, 'px')} 0;
    h2 {
      margin-bottom: 16px;
    }
  }
`

export default Process;