import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["gray-500"]};
  }

  body{
    background: ${props => props.theme["gray-800"]};
    color: ${props => props.theme["gray-100"]}
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 160%;
  }

  h3{
    font-size: 1.5rem;
    font-weight: 700;
  }

  h2{
    font-size: 2rem;
    font-weight: 700;
  }
`