import React from "react"
import styled from "styled-components"
import FormError from "./FormError";

const FormInput = ({ register, label, errors, textarea=false, ...props }) => (
  <Wrapper className={`formItem ${textarea ? 'formItem-textarea' : ''}`}>
    {textarea ? (
      <>
        <span>
          {label}
          <FormError error={errors[register.name]} />
        </span>
        <textarea {...register} name={register.name} {...props} aria-invalid={errors[register.name] ? true : false}></textarea>
      </>
    ) : (
      <>
        <span>
          {label}
          <FormError error={errors[register.name]} />
        </span>
        <input {...register} name={register.name} {...props} aria-invalid={errors[register.name] ? true : false} />
      </>
    )}
  </Wrapper>
)

const Wrapper = styled.label`
  > span {
    display: block;
    margin-bottom: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 2px 16px;
    justify-content: space-between;
    align-items: center;
  }
  font-size: 1rem;
  input,
  textarea {
    border: 1px solid var(--primary-400);
    background-color: var(--primary-200);
    padding: 16px;
    width: 100%;
    &::placeholder {
      color: var(--primary-400);
    }
    transition: border-color .3s;
    &:hover,
    &:focus {
      border-color: var(--primary-500);
      outline: none;
    }
    &[aria-invalid="true"] {
      border-color: var(--error-700);
    }
  }
  input {
    height: 64px;
  }
  textarea {
    resize: none;
    height: 126px;
  }
`

export default FormInput;