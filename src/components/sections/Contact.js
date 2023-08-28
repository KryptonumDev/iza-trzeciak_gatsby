import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Heading from '../../utils/Heading';
import Markdown from '../../utils/Markdown';
import Image from '../atoms/Image';
import ContactForm from '../organisms/ContactForm';
import { Clamp } from '../../utils/functions';

const Contact = ({ data: { heading, paragraph } }) => {
  const { global } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        image {
          asset {
            altText
            gatsbyImageData(placeholder: NONE, width: 48, height: 48)
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <header>
        <div>
          <Heading level='h2' className='h3' image={<Image data={global.image} className='person-border' />}>{heading}</Heading>
        </div>
        <Markdown className='paragraph'>{paragraph}</Markdown>
      </header>
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: ${Clamp(32, 48, 48, 'px')} 16px;
  @media (min-width: 1150px){
    grid-template-columns: 1fr 1.5fr;
    .contactForm {
      margin-top: 230px;
    }
  }
  header {
    h2 {
      margin-bottom: 24px;
    }
    .paragraph {
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
`

export default Contact;