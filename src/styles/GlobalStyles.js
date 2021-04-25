import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --blue: #34495e;
    --lightblue: #2c3e50;
    --red: #E76F51;
    --orange: #f39c12;
    --yellow: #E9C46A;
    --darkgrey: #415a77;
    --grey: #bdc3c7;
    --lightgrey: #ecf0f1;
    --white: #fff;
  }

  body {
    font-size: 2rem;
    background-color: var(--lightgrey);
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
    margin: 2rem 0;
    background-color: white;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 2px var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  }

  label {
font-size: 1.5rem;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: solid var(--grey) 1px;
    border-radius: 10px;
    --cast: 0px;
    box-shadow: var(--cast) var(--cast) 2px var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-color: var(--orange);
    --cast: 1px;
  }
  }

  select {
    padding: .5rem;
    border: solid var(--grey) 1px;
    border-radius: 10px;
    --cast: 0px;
    box-shadow: var(--cast) var(--cast) 2px var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml,<svg width='24' height='20' xmlns='http://www.w3.org/2000/svg'><path d='m0,6l12,12l12,-12l-24,0z'/><path fill='none' d='m0,0l24,0l0,24l-24,0l0,-24z'/></svg>"); 
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 14px;
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
    box-shadow: var(--cast) var(--cast) 2px var(--grey);
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
