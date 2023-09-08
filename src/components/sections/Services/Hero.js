import React from 'react';
import styled from 'styled-components';
import Heading from '../../../utils/Heading';
import Image from '../../atoms/Image';

const Hero = ({ heading, image }) => {
  return (
    <Wrapper>
      <Heading
        level='h1'
        className='h2'
        image={<Image data={image} className='person-border' />}
      >
        {heading}
      </Heading>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: ${844/16}rem;
`

export default Hero;