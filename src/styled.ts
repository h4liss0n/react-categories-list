import styled, { createGlobalStyle } from "styled-components";

import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#172241",
    gray: "#f4f7f6",
    grayDark: "#6c7680",
    teal: "#4bc3c9",
    font: "#202121",
    borderBottom: "#E6EAEA",
  },
};

export const GlobalStyle = createGlobalStyle`

  body, html {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    text-align: left;
    background-color: ${(props) => props.theme.colors.gray};
  }

  * {
    margin: 0;
    padding: 0;
  }


  ul {
    list-style-type: none;
  }

  li a {  
    text-decoration: none;
  }
  p{
    color: ${(props) => props.theme.colors.grayDark};
  }
  
  h1 {
    color: ${(props) => props.theme.colors.teal};
    font-weight: 400;
  }

  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    padding: 0 .5rem;
    font-weight: 300;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 1400px;
  margin: 2rem auto;

  > * {
    padding: 15px;
  }
`;
