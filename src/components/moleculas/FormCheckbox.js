import React from "react"
import styled from "styled-components"
import FormError from "./FormError";

const FormCheckbox = ({ label, register, errors, ...props }) => (
  <Wrapper className="formItem">
    <span className="tick">
      <input
        name={register.name}
        type="checkbox"
        aria-invalid={errors[register.name] ? true : false}
        {...props}
        {...register}
      />
      <Check />
    </span>
    <span className="label">{label}</span>
    <FormError error={errors[register.name]} />
  </Wrapper>
)

const Wrapper = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  .error {
    grid-column: 3/1;
  }
  column-gap: 8px;
  cursor: pointer;
  .tick {
    position: relative;
    color: var(--form-tick);
    input {
      cursor: pointer;
      display: block;
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 2px solid #2E445A50;
      transition: border-color .2s var(--easing);
      &[aria-invalid="true"]{
        border-color: var(--error-700);
      }
      &:checked {
        border-color: #2E445A;
        & + svg {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    svg {
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0) rotate(-5deg);
      transition: transform .2s var(--easing);
    }
  }
  span.label {
    svg {
      display: inline-block;
      vertical-align: middle;
      margin-left: 4px;
    }
  }
`

const Check = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'>
    <path
      stroke='#2E445A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M11.334 16.666L14 19.334l6.667-6.666'
    ></path>
  </svg>
)

export default FormCheckbox;