import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import { Signature } from '../../atoms/Icons';

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h1'>{hero_Heading}</Heading>
        <Signature />
      </header>
      <div className="copy">
        <Heading level='h3'>{hero_Subheading}</Heading>
        <Markdown className="paragraph">{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  header {
    .signature {
      margin-top: ${Clamp(24, 32, 32, 'px')};
      margin-left: auto;
    }
    border-right: 1px solid var(--primary-400);
    padding-right: ${Clamp(32, 32, 108, 'px')};
  }
  .copy {
    .paragraph {
      margin: ${Clamp(16, 16, 24, 'px')} 0 16px;
      p:not(:last-child){
        margin-bottom: ${Clamp(24, 32, 32, 'px')};
      }
    }
  }
  @media (max-width: 1099px){
    grid-template-columns: 1fr;
    header {
      padding-bottom: ${Clamp(24, 32, 32, 'px')};
      border-right: 0;
      border-bottom: 1px solid var(--primary-400);
      padding-right: 0;
    }
    .copy {
      .paragraph {
        margin: ${Clamp(16, 16, 24, 'px')} 0 16px;
        p:not(:last-child){
          margin-bottom: ${Clamp(24, 32, 32, 'px')};
        }
      }
    }

  }
`

export default Hero;