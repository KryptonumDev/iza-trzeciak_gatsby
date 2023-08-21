import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from "../atoms/Icons";
import { Clamp } from "../../utils/functions";

const Nav = ({ links }) => {
  return (
    <>
      <WrapperSkipToMainContent href="#main">Przejdź do głównej treści</WrapperSkipToMainContent>
      <WrapperNav className="max-width">
        <Link to="/" aria-label="Strona główna">
          <Logo />
        </Link>
        <ul className="links">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </WrapperNav>
    </>
  );
}

const WrapperNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Clamp(24, 32, 32, 'px')} 0 16px;
  border-bottom: 1px solid var(--primary-400);
  background-color: var(--primary-100);
  a {
    transition: color .3s;
    &:hover {
      color: var(--primary-700);
    }
    &:active {
      color: var(--primary-900);
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      line-height: 1;
      a {
        padding: 4px 0;
      }
      &:not(:last-child) {
        margin-right: ${Clamp(12, 24, 24, 'px')};
        padding-right: ${Clamp(12, 24, 24, 'px')};
        border-right: 1px solid var(--primary-400);
      }
    }
  }
  @media (max-width: 359px){
    font-size: 1rem;
    svg .logotype {
      transform: scale(.8);
      transform-box: fill-box;
      transform-origin: left center;
    }
  }
`

const WrapperSkipToMainContent = styled.a`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  padding: 13px;
  &:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }
`

export default Nav;