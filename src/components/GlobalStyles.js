import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  --primary-dark: #316e7e;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

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
