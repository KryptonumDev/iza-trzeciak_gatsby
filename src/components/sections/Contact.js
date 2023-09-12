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
        email
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
    <Wrapper id='kontakt'>
      <header>
        <div>
          <Heading level='h2' image={<Image data={global.image} className='person-border' />}>{heading}</Heading>
        </div>
        <Markdown className='paragraph'>{paragraph}</Markdown>
      </header>
      <ContactForm email={global.email} />
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
      font-size: ${Clamp(36, 44, 32)};
      @media (max-width: 1149px){
        font-size: ${Clamp(36, 44, 44)};
      }
    }
    .paragraph {
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
`

export default Contact;