import React from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { Clamp } from "./functions";


const components = {
  listItem: {
    bullet: ({ children }) => <li><ListBullet /><span>{children}</span></li>,
  },
  list: {
    bullet: ({ children }) => <ul className="unorderedList">{children}</ul>,
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
  p {
    line-height: 150%;
    & + p {
      margin-top: 16px;
    }
  }
  > h2 {
    font-weight: 700;
    font-size: ${Clamp(18, 18, 20)};
    &:not(:first-child) {
      margin-top: ${Clamp(32, 42, 42, 'px')};
    }
    margin-bottom: 24px;
  }
  ol {
    margin: 16px 0;
    display: grid;
    row-gap: 16px;
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

const ListBullet = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
    <path
      fill='#2E445A'
      d='M4 11.25a.75.75 0 000 1.5v-1.5zm0 1.5h16v-1.5H4v1.5z'
      opacity='0.5'
    ></path>
    <path
      stroke='#2E445A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M14 6l6 6-6 6'
    ></path>
  </svg>
)

export default PortableContent;