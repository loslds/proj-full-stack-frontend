import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    background: #000000;
    font-size: 14px;
    color: #dcd6d6;
    font-family: sans-serif, Helvetica, -apple-system;
    overflow-x: hidden;
  }
  code {
    font-family: Courier, monospace;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  label,
  input,
  select {
    display: flex;
    margin: 0 10px;
    padding: 0 10px;
    font-size: large;
    line-height: normal;
  }
  input {
    color: black;
  }
  select {
    width: 100%;
  }
  option:hover,
  option:focus,
  option.selected.focus {
    font-weight: bold;
    color: #fb0000;
  }
  span {
    display: inline-flex;
    align-items: center;
    gap: 8px; /* Espaçamento entre a imagem e o texto */
  }

  span img {
    width: 16px;
    height: 16px; /* Tamanho da imagem */
  }
`;
