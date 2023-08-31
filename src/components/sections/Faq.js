import React, { useState } from 'react';
import styled from 'styled-components';
import { Clamp } from '../../utils/functions';
import Heading from '../../utils/Heading';
import Markdown from '../../utils/Markdown';
import { AnimatePresence, motion } from 'framer-motion';

const Faq = ({ data: { heading, list }}) => {
  const [ opened, setOpened ] = useState(0);

  const handleClick = (e, i) => {
    e.preventDefault();
    setOpened(i);
  }

  return (
    <Wrapper className='focus-light sec-wo-margin'>
      <Heading level='h2'>{heading}</Heading>
      <div className="wrapper">
        {list.map((item, i) => (
          <details key={i} open data-opened={opened === i}>
            <summary onClick={(e) => handleClick(e, i)}>
              <Markdown components={{ p: 'span' }}>{item.question}</Markdown>
              <div className="indicator" aria-hidden='true'><span></span><span></span></div>
            </summary>
            <AnimatePresence mode="wait">
              {opened === i && (
                <motion.div
                  className="answer"
                  initial={{ height: 0, marginBottom: '0'}}
                  animate={{ height: 'auto', marginBottom: '16px' }}
                  exit={{ height: 0, marginBottom: '0' }}
                >
                  <Markdown>{item.answer}</Markdown>
                </motion.div>
              )}
            </AnimatePresence>
          </details>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--primary-600);
  color: var(--primary-300);
  padding: ${Clamp(48, 64, 80, 'px')} 0;
  display: grid;
  @media (min-width: 1199px){
    grid-template-columns: 1fr 2fr;
  }
  gap: 32px;
  details {
    &:not(:last-child){
      border-bottom: 1px solid var(--primary-500);
    }
    > div {
      overflow: hidden;
    }
    summary {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 32px;
      padding: 24px 0 16px;
      > span {
        transition: transform .3s var(--easing);
      }
      .indicator {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid rgba(237 240 242 / 50%);
        position: relative;
        transition: transform .3s var(--easing);
        span {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: var(--primary-300);
          height: 2px;
          width: 8px;
          border-radius: 8px;
          &:last-child {
            transition: transform .4s var(--easing);
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
    }
    &[data-opened="true"] {
      summary {
        cursor: default;
        .indicator span:last-child {
          transform: translate(-50%, -50%) rotate(0);
        }
      }
    }
    &:not([data-opened="true"]){
      summary:hover {
        > span {
          transform: translateX(8px);
        }
        .indicator {
          transform: scale(.9);
        }
      }
    }
  }
`

export default Faq;