import React from "react"
import styled from "styled-components"

const FormRadio = ({ register, label, errors, ...props }) => (
  <Wrapper aria-invalid={errors[register.name] ? true : false}>
    <input type="radio" name={register.name} {...register} {...props} />
    <div className="indicator"></div>
    <span>{label}</span>
  </Wrapper>
)

const Wrapper = styled.label`
  border: 1px solid var(--primary-400);
  background-color: var(--primary-200);
  &[aria-invalid="true"] {
    border-color: var(--error-700);
  }
  padding: 16px 12px;
  text-align: center;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    &:checked + .indicator {
      border-color: var(--primary-500);
      &::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  transition: border-color .4s;
  @media (max-width: 399px){
    font-size: 1rem;
  }
  @media (max-width: 369px){
    font-size: ${13/16}rem;
  }
  .indicator {
    margin: 0 auto 16px;
    width: 28px;
    height: 28px;
    border: 1px solid var(--primary-400);
    background-color: var(--primary-100);
    border-radius: 50%;
    position: relative;
    transition: border-color .4s;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 18px;
      height: 18px;
      background-color: var(--primary-500);
      border-radius: 50%;
      transition: transform .4s;
    }
  }
  &:hover {
    &,
    .indicator {
      border-color: var(--primary-500);
    }
  }
`

export default FormRadio;