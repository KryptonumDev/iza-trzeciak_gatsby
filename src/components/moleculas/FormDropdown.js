import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormError from "./FormError";

const FormDropdown = ({ register, resetField, label, values, errors }) => {
  const [selectedValue, setSelectedValue] = useState('blank');
  
  useEffect(() => {
    setSelectedValue('blank');
    resetField(register.name)
  }, [values]);

  return (
    <Wrapper className='formItem'>
      <span>
        {label}
        <FormError error={errors[register.name]} />
      </span>
      <select
        {...register}
        name={register.name}
        disabled={!values}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option disabled value='blank'>- Wybierz -</option>
        {values?.map((value, i) => (
          <option value={value} key={i}>{value}</option>
          ))}
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  font-size: 1rem;
  select {
    width: 100%;
    background: right 16px center / 24px 24px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%232E445A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m19 9-7 6-7-6'/%3E%3C/svg%3E");
    border: 1px solid var(--primary-400);
    background-color: var(--primary-200);
    padding: 16px 60px 16px 16px;
    width: 100%;
    height: 64px;
    &[aria-invalid="true"] {
      border-color: var(--error);
    }
    &::placeholder {
      color: var(--primary-400);
    }
  }
`

export default FormDropdown;