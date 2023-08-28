import React from 'react';
import styled from 'styled-components';

const steps = [ 'Podstawowe dane', 'Temat rozmowy', 'Podsumowanie' ];

const ContactFormSteps = ({ step, setStep }) => {
  const handleStepClick = (index) => {
    if (step > index) {
      setStep(index);
    }
  };
  
  return (
    <Wrapper>
      {steps.map((item, i) => (
        <li
          key={i}
          aria-current={step === i ? 'step' : false}
          className={step >= i ? 'active' : ''}
        >
          <button
            onClick={() => handleStepClick(i)}
            disabled={step <= i}
          >
            <span>{item}</span>
            <div
              className="iterator"
              aria-hidden='true'
            >
              <svg width='48' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='var(--primary-600)' strokeWidth='1' strokeDasharray={`${step >= i ? 151 : 0} 151`}><circle cx="24" cy="24" r="24" /></svg>
              <span>0{i+1}</span>
            </div>
          </button>
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ol`
  list-style-type: none;
  display: grid;
  gap: 32px;
  li {
    button {
      &:disabled {
        cursor: default;
      }
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: flex-end;
      gap: 12px;
      align-items: center;
      text-align: right;
      > span {
        line-height: 1.2;
      }
      .iterator {
        width: 48px;
        height: 48px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          padding: .5px;
          border-radius: 50%;
          transition: stroke-dasharray .4s 0s;
          box-shadow: inset 0px 0px 0px 1px var(--primary-400);
          background-color: var(--primary-100);
          position: absolute;
          overflow: visible;
          transform: rotate(-90deg);
          z-index: 1;
        }
        span {
          position: relative;
          z-index: 2;
        }
      }
    }
    &:not(:first-child){
      button {
        .iterator {
          &::before,
          &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 23.5px;
            bottom: 100%;
            width: 1px;
            height: 32px;
            transition: transform .4s .3s;
            transform-origin: top;
          }
          &::before {
            background-color: var(--primary-400);
          }
          &::after {
            background-color: var(--primary-600);
            transform: scaleY(0);
          }
        }
      }
      &.active {
        button {
          .iterator {
            &::after {
              transform: scaleY(1);
              transition-delay: 0s;
            }
          }
        }
      }
    }
    &.active {
      color: var(--primary-600);
      button {
        .iterator {
          svg {
            transition-delay: .3s;
          }
        }
      }
    }
  }
  @media (max-width: 749px){
    max-width: 400px;
    margin: 0 auto;
    gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    li {
      button {
        grid-template-columns: 1fr;
        gap: 8px;
        font-size: 15px;
        text-align: center;
        .iterator {
          order: -1;
          margin: auto;
          svg {
            transform: rotate(-180deg);
          }
        }
      }
      &:not(:first-child){
        button {
          .iterator {
            &::before,
            &::after {
              left: -88px;
              bottom: 23.5px;
              width: 88px;
              height: 1px;
              transform-origin: left;
            }
            &::after {
              transform: scaleX(0);
            }
          }
        }
        &.active {
          button {
            .iterator {
              &::after {
                transform: scaleX(1);
              }
            }
          }
        }
      }
      &.active {
        color: var(--primary-600);
        button {
          .iterator {
            svg {
              transition-delay: .3s;
            }
          }
        }
      }
    }
  }
`

export default ContactFormSteps;