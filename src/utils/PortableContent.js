import React from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { Clamp } from "./functions";

const components = {
  listItem: {
    bullet: ({ children }) => <li><span>{children}</span></li>,
  },
  marks: {
    link: ({ value: { href }, children }) => {
      return <a href={href} target="_blank" rel="noreferrer" className="link">{children}</a>
    }
  }
}

const PortableContent = ({ data, ...props }) => {
  return (
    <Wrapper {...props}>
      <PortableText
        value={data}
        components={components}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (min-width: 900px){
    columns: 2;
    gap: 64px;
  }
  font-size: ${Clamp(16, 18, 20)};
  p {
    line-height: 150%;
    & + p {
      margin-top: 16px;
    }
  }
  > h2 {
    zoom: 1;
    font-size: ${Clamp(18, 18, 20)};
    &:not(:first-child) {
      margin-top: ${Clamp(32, 42, 42, 'px')};
    }
    margin-bottom: 24px;
  }
  ul, ol {
    list-style-type: none;
    margin: 16px 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  ul {
    li {
      display: grid;
      column-gap: 8px;
      grid-template-columns: 24px 1fr;
      svg {
        margin-top: .1em;
      }
    }
  }
  ol {
    counter-reset: counter;
    font-size: 16px;
    li {
      display: grid;
      @media (min-width: 500px) {
        grid-template-columns: auto 1fr;
      }
      gap: 12px;
      align-items: baseline;
      counter-increment: counter;
      &::before {
        content: counter(counter);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--primary-400);
        background-color: var(--primary-100);
      }
    }
  }
`

export default PortableContent;