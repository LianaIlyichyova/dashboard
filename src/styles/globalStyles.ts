import { createGlobalStyle } from "styled-components";
import { fontSizes } from "./constants";

const GlobalCSSStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  


  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  html, body, #root {
  height: 100%;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: ${fontSizes.m};
    line-height: 1.5;
    color: ${({ theme }) => theme.token.colorTextPrimary};
    background-color: ${({ theme }) => theme.token.colorBgBase || "#0f172a"};
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  a {
    color: inherit;
    text-decoration: none;
  }


  /* === Scrollbar Styles === */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.token.scrollbarThumb || "rgba(0, 0, 0, 0.2)"};
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) =>
      theme.token.scrollbarThumbHover || "rgba(0, 0, 0, 0.3)"};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.token.scrollbarThumb || "rgba(0,0,0,0.2)"} transparent`};
  }

  h1{
    font-size: ${fontSizes.l};
    font-weight: 500;
  }

    h3{
    font-size: ${fontSizes.m};
    font-weight: 600;
  }
`;

export default GlobalCSSStyles;
