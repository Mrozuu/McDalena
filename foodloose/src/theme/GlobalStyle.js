import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding: 0;
    overflow: hidden;
    margin: 0 !important;
    font-size: 1.6rem;
    font-family: 'Sacramento', cursive;
  }
`;

export default GlobalStyle;
