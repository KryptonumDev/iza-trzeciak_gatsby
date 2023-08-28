import React from "react";
import styled from "styled-components";

const FormError = ({ error }) => {
  return (
    error && (
      <Wrapper className='error'>
        <Error />
        <span>{'To pole jest wymagane'}</span>
      </Wrapper>
    )
  );
}

const Wrapper = styled.p`
  overflow: hidden;
  display: flex;
  align-items: center;
  color: var(--error-700);
  gap: 8px;
`

export default FormError;

const Error = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <g>
      <circle
        cx='10'
        cy='10'
        r='8.333'
        stroke='#C46666'
        strokeWidth='1.5'
        opacity='0.5'
      ></circle>
      <circle cx='10' cy='13.333' r='0.833' fill='#C46666'></circle>
      <path
        stroke='#C46666'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 5.833v5'
      ></path>
    </g>
  </svg>
)