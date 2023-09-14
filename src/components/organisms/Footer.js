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
          {global.linkedin && (
            <li>
              <a href={global.linkedin} target='_blank' rel="noreferrer">
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </li>
          )}
          {global.facebook && (
            <li>
              <a href={global.facebook} target='_blank' rel="noreferrer">
                <Facebook />
                <span>Facebook</span>
              </a>
            </li>
          )}
        </ul>
        <ul className="legal">
          <li>
            <Link to='/polityka-prywatnosci'>Polityka prywatności</Link>
          </li>
        </ul>
      </div>
      <div className="agency">
        <p>Zaprojektowane przez:</p>
        <a href="https://kryptonum.eu/pl" aria-label="Krypotnum - Agencja Interatywna">
          <KryptonumLogo />
        </a>
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
  .agency {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4px 16px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid var(--primary-400);
    svg {
      width: ${Clamp(131, 131, 150, 'px')};
      height: auto;
    }
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
    padding: 48px 0 82px;
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

const KryptonumLogo = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='150' height='32' viewBox='0 0 150 32' fill='none'>
    <path
      fill='url(#paint0_linear_708_1092)'
      d='M21.094 16a5.88 5.88 0 01-1.039 3.326 6.3 6.3 0 01-2.776 2.24v10.218H12.19v-10.22a6.294 6.294 0 01-2.777-2.24A5.875 5.875 0 018.375 16c0-1.181.361-2.337 1.039-3.325a6.294 6.294 0 012.777-2.24V.216h5.088v10.218a6.295 6.295 0 012.777 2.24A5.877 5.877 0 0121.094 16z'
    ></path>
    <path
      fill='url(#paint1_linear_708_1092)'
      d='M30.228 0v7.285l-5.314 5.072-2.542-2.428-1.638 1.563a7.5 7.5 0 00-1.273-1.215L30.228 0z'
    ></path>
    <path
      fill='url(#paint2_linear_708_1092)'
      d='M24.915 19.643l5.314 5.072V32L19.463 21.723c.472-.356.9-.763 1.272-1.214l1.637 1.562 2.543-2.428z'
    ></path>
    <path
      fill='#010104'
      d='M7.106 16a7.037 7.037 0 001.636 4.507l-6.724 6.42v-7.285l2.544-2.428v-2.428l-2.544-2.429V5.072l6.724 6.42A7.036 7.036 0 007.105 16zm40.269 7.5l-6.123-6.784V23.5h-1.941V8.63h1.941v6.891l6.144-6.89h2.453l-6.741 7.445 6.805 7.424h-2.538zm5.794-9.792a3.744 3.744 0 011.451-1.557c.64-.37 1.415-.555 2.326-.555v2.005h-.512c-2.176 0-3.264 1.18-3.264 3.542V23.5h-1.942V11.81h1.941v1.898zm15.874-1.899l-7.04 17.195h-2.006l2.304-5.632-4.715-11.563h2.155l3.67 9.472 3.626-9.472h2.005zm3.039 2.155c.384-.668.953-1.223 1.707-1.664.768-.455 1.656-.683 2.666-.683 1.038 0 1.977.25 2.816.747.854.498 1.522 1.202 2.006 2.112.483.896.725 1.941.725 3.136 0 1.18-.242 2.233-.725 3.157-.484.925-1.152 1.643-2.006 2.155-.839.512-1.778.768-2.816.768-.995 0-1.877-.22-2.645-.661-.754-.455-1.33-1.017-1.728-1.686v7.702h-1.941V11.809h1.941v2.155zm7.936 3.648c0-.882-.178-1.65-.533-2.304a3.671 3.671 0 00-1.451-1.493 3.928 3.928 0 00-1.984-.512 3.88 3.88 0 00-1.984.533c-.597.341-1.08.846-1.45 1.515-.356.654-.534 1.415-.534 2.282 0 .882.178 1.657.533 2.326.37.654.854 1.159 1.451 1.514a4.004 4.004 0 001.984.512c.725 0 1.387-.17 1.984-.512a3.818 3.818 0 001.45-1.514c.356-.669.534-1.451.534-2.347zm5.84-4.203V20.3c0 .569.121.974.363 1.216.242.228.662.341 1.259.341h1.43V23.5h-1.75c-1.08 0-1.892-.249-2.432-.747-.54-.497-.81-1.315-.81-2.453v-6.89h-1.515v-1.6h1.514V8.864h1.942v2.944h3.05v1.6h-3.05zm9.649 10.283c-1.095 0-2.09-.249-2.987-.747a5.426 5.426 0 01-2.09-2.112c-.498-.924-.747-1.99-.747-3.2 0-1.194.256-2.247.768-3.157.526-.924 1.237-1.628 2.133-2.112.896-.498 1.899-.747 3.008-.747 1.11 0 2.112.25 3.008.747.896.484 1.6 1.18 2.112 2.09.526.91.789 1.97.789 3.18 0 1.208-.27 2.275-.81 3.2a5.49 5.49 0 01-2.155 2.111c-.91.498-1.92.747-3.03.747zm0-1.707a4.1 4.1 0 001.962-.49c.612-.327 1.103-.818 1.473-1.472.384-.655.576-1.451.576-2.39 0-.938-.185-1.735-.555-2.389-.37-.654-.853-1.138-1.45-1.45a3.977 3.977 0 00-1.942-.491 4.02 4.02 0 00-1.963.49c-.583.313-1.052.797-1.408 1.451-.355.654-.533 1.45-.533 2.39 0 .952.17 1.756.512 2.41.355.654.825 1.145 1.408 1.472.583.313 1.223.47 1.92.47zm13.39-10.389c1.422 0 2.574.434 3.456 1.301.881.854 1.322 2.091 1.322 3.712V23.5h-1.92v-6.613c0-1.167-.291-2.055-.874-2.667-.583-.626-1.38-.939-2.39-.939-1.024 0-1.841.32-2.453.96-.597.64-.896 1.572-.896 2.795V23.5h-1.941V11.81h1.941v1.663a3.87 3.87 0 011.557-1.386 4.934 4.934 0 012.198-.491zm17.464.213V23.5h-1.941v-1.728a3.837 3.837 0 01-1.558 1.408c-.654.327-1.379.49-2.176.49-.91 0-1.728-.184-2.453-.554-.725-.384-1.301-.953-1.728-1.707-.412-.753-.619-1.67-.619-2.752V11.81h1.92v6.592c0 1.152.292 2.041.875 2.667.583.612 1.38.917 2.389.917 1.039 0 1.856-.32 2.454-.96.597-.64.896-1.571.896-2.794V11.81h1.941zm16.483-.213c.911 0 1.721.192 2.432.576.711.37 1.273.932 1.686 1.685.412.754.618 1.671.618 2.752V23.5h-1.92v-6.613c0-1.167-.291-2.055-.874-2.667-.569-.626-1.344-.939-2.326-.939-1.009 0-1.813.327-2.41.982-.598.64-.896 1.571-.896 2.794V23.5h-1.92v-6.613c0-1.167-.292-2.055-.875-2.667-.569-.626-1.344-.939-2.325-.939-1.01 0-1.814.327-2.411.982-.597.64-.896 1.571-.896 2.794V23.5h-1.941V11.81h1.941v1.685a3.853 3.853 0 011.536-1.408 4.748 4.748 0 012.155-.491c.981 0 1.849.22 2.602.661.754.441 1.316 1.088 1.686 1.942a3.832 3.832 0 011.621-1.92 4.777 4.777 0 012.517-.683z'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_708_1092'
        x1='20.856'
        x2='7.574'
        y1='0.215'
        y2='0.556'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
      <linearGradient
        id='paint1_linear_708_1092'
        x1='30.026'
        x2='18.81'
        y1='0'
        y2='0.623'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
      <linearGradient
        id='paint2_linear_708_1092'
        x1='30.027'
        x2='18.812'
        y1='19.643'
        y2='20.265'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
    </defs>
  </svg>
)

export default Footer;