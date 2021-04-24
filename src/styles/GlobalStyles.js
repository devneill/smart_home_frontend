import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --blue: #34495e;
    --red: #E76F51;
    --orange: #f39c12;
    --yellow: #E9C46A;
    --darkgrey: #415a77;
    --grey: #bdc3c7;
    --white: #fff;
  }

  body {
    font-size: 2rem;
  }

  h1 {
    margin: 20px;
    font-size: 3rem;
    text-align: left;
  }

  h2 {
    margin: 20px;
    font-size: 2rem;
  }

  fieldset {
    border: solid var(--grey) 1px;
    border-radius: 10px;
    margin: 15px 0;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  }

  input {
    padding: 0.5rem;
    border: solid var(--grey) 1px;
    border-radius: 10px;
    --cast: 0px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-color: var(--orange);
    --cast: 1px;
  }
  }

  a {
    display: flex;
    align-items:center;
  }

  button {
    height: clamp(10px, 4rem, 80px);
    width: 100%;
    background: var(--blue);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
      color: var(--orange);
    }
  }

  img {
    max-width: 100%;
    max-height: 100%
  }

@media (prefers-reduced-motion: no-preference) {
  .loading-logo {
    margin-top: 20%;
    max-width: 8rem;
    animation: loading-logo-spin infinite 2s linear;
  }
}

@keyframes loading-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  /* Scrollbar */
  html {
    scrollbar-width: thin;  
    scrollbar-color: var(--blue) var(--white);  
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

`;

export default GlobalStyles;
