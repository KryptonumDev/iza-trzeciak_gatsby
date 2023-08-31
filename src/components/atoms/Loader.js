import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  width: 21px;
  height: 21px;
  animation: rotate 1.5s linear infinite;
  circle {
    stroke-dasharray: 150 200;
    stroke-dashoffset: -10;
    animation: dash 1s infinite;
    stroke-linecap: round;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89 200;
      stroke-dashoffset: -124;
    }
  }
`

export default Loader;