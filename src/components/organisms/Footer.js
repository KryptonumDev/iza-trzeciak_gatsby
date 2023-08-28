import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Image from "../atoms/Image";
import { Facebook, Linkedin, Signature } from "../atoms/Icons";
import { Clamp } from "../../utils/functions";

const Footer = ({ links }) => {
  const { global } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        facebook
        linkedin
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
    <FooterWrapper className="max-width">
      <Link className="author" to='/' aria-label="Strona główna">
        <Image data={global.image} className='person-border' />
        <Signature />
      </Link>
      <div className="wrapper">
        <ul className="links">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="social">
          <li>
            <a href={global.linkedin} target='_blank' rel="noreferrer">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={global.facebook} target='_blank' rel="noreferrer">
              <Facebook />
              <span>Facebook</span>
            </a>
          </li>
        </ul>
        <ul className="legal">
          <li>
            <Link to='/polityka-prywatnosci'>Polityka prywatności</Link>
          </li>
          <li>
            <Link to='/polityka-prywatnosci'>Pliki Cookies</Link>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 32px 0;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: 'links social legal';
    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      row-gap: 8px;
    }
    a {
      padding: 4px 0;
      transition: color .3s;
      &:hover {
        color: var(--primary-700);
      }
      &:active {
        color: var(--primary-900);
      }
    }
  }
  .author {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 auto var(--pageMargin);
    &:not(:active):hover {
      img {
        transform: scale(.95);
      }
    }
    .img img {
      transition: transform .4s;
    }
  }
  .links {
    grid-area: links;
  }
  .links,
  .legal {
    line-height: 1;
    li:not(:last-child) {
      margin-right: ${Clamp(18, 24, 24, 'px')};
      padding-right: ${Clamp(18, 24, 24, 'px')};
      border-right: 1px solid var(--primary-400);
    }
  }
  .social {
    grid-area: social;
    gap: 24px;
    a {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  .legal {
    justify-content: flex-end;
    grid-area: legal;
  }
  @media (max-width: 1099px) {
    .wrapper {
      grid-template-columns: 1fr auto;
      grid-template-areas: 'social links' '. legal';
    }
    .author {
      margin-left: 0;
    }
    .links {
      justify-content: flex-end;
    }
    .legal {
      margin-top: ${Clamp(24, 24, 64, 'px')};
      justify-content: flex-end;
    }
  }
  @media (max-width: 599px) {
    padding: 48px 0;
    .wrapper {
      grid-template-columns: 1fr;
      grid-template-areas: 'social' 'links' 'legal';
    }
    .links {
      margin-top: 48px;
    }
    .links, .legal {
      justify-content: unset;
    }
  }
`
 
export default Footer;