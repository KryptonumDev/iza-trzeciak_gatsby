import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = ({ theme = 'primary', children, to, className, ...props }) => {
  const isExternal = to && to.startsWith('https://');

  const commonProps = {
    className: `cta ${className}`,
    "data-theme": theme,
    ...props,
  };

  return (
    to ? (
      isExternal
      ? (
        <StyledAnchor as="a" href={to} target="_blank" rel="noreferrer" {...commonProps}>
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
  /* Add your styling here */
`;

export default Button;
