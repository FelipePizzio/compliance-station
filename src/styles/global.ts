import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --branco: #FFFFFF;
    --roxo: #9B00F0;
    --azul: #263072;
    --cinza-100: #F2F2F2;
    --cinza-300: #BBBBBB;
    --cinza-700: #777777; 
    --cinza-900: #424242;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  body {
    background: var(--cinza-100);
  }
`;
