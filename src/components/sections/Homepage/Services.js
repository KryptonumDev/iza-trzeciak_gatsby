import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Heading from '../../../utils/Heading';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import { Link } from 'gatsby';

export const servicesLinks = [
  'scenariusze-pozarowe-i-matryce-sterowan',
  'ekspertyzy-stanu-ochrony-ppoz',
  'uzgadnianie-projektow-budowlanych',
  'uzgadnianie-projektow-urzadzen-ppoz',
  'opinia-techniczna',
  'doradztwo-konsultacje'
]

const Services = ({
  data: {
    services_Heading,
    services_Paragraph,
    services_Subheading,
    services_Cta,
    services_List,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <Heading level='h2'>{`${services_Heading} <span className="h3">${services_Subheading}</span>`}</Heading>
        <Markdown className='paragraph'>{services_Paragraph}</Markdown>
      </header>
      <div className="cta-wrapper">
        {services_Cta.map((cta, i) => (
          <Button data={cta} key={i} />
        ))}
      </div>
      <ul className="list">
        {services_List.map(({ title, img }, i) => (
          <li key={i}>
            <Link to={`/ppoz-wspolpraca/#${servicesLinks[i]}`}>
              <Markdown>{title}</Markdown>
              <Image data={img} />
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header list' 'cta list';
  gap: ${Clamp(32, 48, 48, 'px')} ${Clamp(64, 82, 142, 'px')};
  header {
    grid-area: header;
  }
  h2 {
    span {
      margin-top: ${Clamp(16, 16, 24, 'px')};
    }
    margin-bottom: ${Clamp(24, 24, 32, 'px')};
  }
  .paragraph {
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  .cta-wrapper {
    grid-area: cta;
  }
  .list {
    grid-area: list;
    list-style-type: none;
    li {
      &:not(:last-child){
        margin-bottom: ${Clamp(16, 20, 24, 'px')};
      }
      a {
        border-top: 1px solid var(--primary-400);
        border-bottom: 1px solid var(--primary-400);
        padding: ${Clamp(16, 24, 24, 'px')} ${Clamp(12, 40, 24, 'px')};
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: flex-start;
        gap: ${Clamp(16, 32, 32, 'px')};
        transition: color .3s;
        &:hover {
          color: var(--primary-700);
        }
      }
    }
  }
  @media (max-width: 1049px){
    grid-template-columns: 1fr;
    grid-template-areas: 'header' 'list' 'cta';
  }
`

export default Services;