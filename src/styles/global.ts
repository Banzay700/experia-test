import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.backgrounds.primary}; 
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    height: 100%;
  }

  .App {
    height: 100%;
  }
`
