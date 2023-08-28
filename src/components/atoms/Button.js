import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = ({ data, theme = 'primary', children, to, className, ...props }) => {
  if(data){
    theme = data.theme;
    to = data.href;
    children = data.text;
  }
  const isExternal = to?.startsWith('https://');

  const commonProps = {
    className: `cta ${className}`,
    "data-theme": theme,
    ...props,
  };

  return (
    to ? (
      isExternal
      ? (
          <StyledAnchor as="a" href={to} target="_blank" rel="noreferrer"{...commonProps}>
          {children}
        </StyledAnchor>
      ) : (
        <StyledAnchor as={Link} to={to} {...commonProps}>
          {children}
        </StyledAnchor>
      )
    ) : (
      <StyledAnchor as="button" {...commonProps}>
        {children}
      </StyledAnchor>
    )
  )
};

const StyledAnchor = styled.a`
  font-weight: 500;
  padding: 0 48px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 499px){
    width: 100%;
    padding: 0 16px;
  }
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: transform .4s var(--easing);
  transform-origin: bottom;
  &:active {
    transform:scale(.97);
  }
  &::before {
    content: '';
    width: 110%;
    aspect-ratio: 1/1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: transform .4s var(--easing);
    z-index: -1;
    border-radius: 50%;
  }
  &:hover::before {
    transform: translate(-50%,-50%) scale(1);
  }
  &[data-theme="primary"]{
    background-color: var(--primary-600);
    color: var(--primary-100);
    &::before {
      background-color: var(--primary-500);
    }
  }
  &[data-theme="secondary"]{
    border: 1px solid var(--primary-400);
    background-color: var(--primary-200);
    color: var(--primary-600);
    &::before {
      background-color: rgba(76,105,135,.20);
    }
  }
`;

export default Button;
