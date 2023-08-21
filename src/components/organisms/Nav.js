import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <WrapperSkipToMainContent href="#main">Przejdź do głównej treści</WrapperSkipToMainContent>
      <WrapperNav>

      </WrapperNav>
    </>
  );
}

const WrapperNav = styled.nav`

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