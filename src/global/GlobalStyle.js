import { createGlobalStyle } from "styled-components";
import { Clamp } from '../utils/functions';
import '../resources/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --primary-100: #F8FBFD;
    --primary-200: #F2F5F7;
    --primary-300: #EDF0F2;
    --primary-400: #C2D3D3;
    --primary-500: #556677;
    --primary-600: #2E445A;
    --primary-700: #3C4854;
    --primary-800: #2F3841;
    --primary-900: #242B32;

    --success-100: #EDFAF8;
    --success-200: #C8F1EA;
    --success-300: #88E0D1;
    --success-400: #71DAC8;
    --success-500: #4ED1BA;
    --success-600: #47BEA9;
    --success-700: #379484;
    --success-800: #2B7366;
    --success-900: #21584E;

    --error-100: #FBF1F1;
    --error-200: #EDBDBD;
    --error-300: #E49F9F;
    --error-400: #DF8D8D;
    --error-500: #D77070;
    --error-600: #C46666;
    --error-700: #995050;
    --error-800: #763E3E;
    --error-900: #5A2F2F;

    --pageMargin: 40px;
    @media (max-width: 849px){
     --pageMargin: 80px;
    }
    @media (max-width: 649px){
     --pageMargin: ${Clamp(16, 40, 40, 'px')};
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
    background-color: var(--primary-100);
    color: var(--primary-500);
    font-size: ${Clamp(18, 18, 20)};
  }
  :focus {
    outline: none;
  }
  .tabbing :focus-visible {
    outline: 1px solid var(--primary-600);
    outline-offset: 5px;
  }
  main,
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
    strong {
      color: var(--primary-600);
    }
  }
  p {
    strong {
      color: var(--primary-600);
      font-weight: 700;
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${Clamp(96, 144, 172, "px")};
    margin-top: ${Clamp(32, 96, 128, "px")};
    margin-bottom: ${Clamp(96, 144, 172, "px")};
  }
`

export default GlobalStyle