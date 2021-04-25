import "normalize.css";
import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/SourceSansPro.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: SourceSansPro;
    src: url(${font});
  }
  html {
    font-family: SourceSansPro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
