import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Global Styles
===============
*/

.title {
    font-family: "Permanent Marker";
}

@media screen and (min-width: 800px) {
  .form-group {
      max-width: 750px;
    }
}
`;

export default GlobalStyles;
