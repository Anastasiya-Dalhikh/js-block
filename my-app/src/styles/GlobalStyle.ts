import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${({theme}) => theme.colors.pageBg};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`  