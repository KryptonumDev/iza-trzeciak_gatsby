import { createGlobalStyle } from "styled-components";
import '../resources/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --pageMargin: 40px;
    @media (max-width: 699px){
     --pageMargin: 16px;
    }
  }
  body.scrollLock {
    overflow: hidden;
    touch-action: none;
  }
  body {
    min-width: 320px;
    font-size: 16px;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    font-weight: 500;
    font-family: 'Erode', serif;
  }
  :focus {
    outline: none;
  }
  .tabbing :focus-visible {
    outline: 3px solid var(--secondary-500);
    outline-offset: 5px;
  }
  .max-width {
    max-width: 1366px;
    width: calc(100% - var(--pageMargin) * 2);
    margin: 0 auto;
    height: 100%;
  }
  svg {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  label {
    display: block;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  sup {
    font-size: .6em;
    vertical-align: top;
  }
  input, textarea, button, select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    appearance: none;
  }
  iframe {
    border: none;
    display: block;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`

export default GlobalStyle