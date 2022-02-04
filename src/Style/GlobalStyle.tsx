import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'KoPubDotumMedium';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

 ${reset}
a{
  text-decoration:none;
  color:inherit
}
*{
  box-sizing:border-box;
}
`;

export default GlobalStyle;
