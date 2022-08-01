import { createGlobalStyle } from 'styled-components';
import background from '../assets/bg.svg';

export default createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #f0f0f5;
    background: url(${background}) no-repeat 70% top;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  input,button {
    font-size:1.6rem
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
`;
