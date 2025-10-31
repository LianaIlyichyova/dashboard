import { createGlobalStyle } from "styled-components";

const GlobalCSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
    font: inherit;
  }

  ul,
  li {
    list-style: none;
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

  html {
    scroll-behavior: smooth;
    font-size: 62.5%; /* 1rem = 10px */
  }

  html, body, #root {
  height: 100%;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.6rem; /* = 16px */
    line-height: 1.5;
    color: ${({ theme }) => theme.token.colorTextPrimary};
    background-color: ${({ theme }) => theme.token.colorPrimaryBg || "#0f172a"};
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalCSSReset;
