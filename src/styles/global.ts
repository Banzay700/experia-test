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
    font-family: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.background.primary}; 
    color: ${({ theme }) => theme.palette.white};
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input, button {
    outline: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }
  #root {
    height: 100%;
  }

  .App {
    height: 100%;
  }
  
  .recharts-sector {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.gray};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.lightGray};
    border-radius: 4px;
  }
`
