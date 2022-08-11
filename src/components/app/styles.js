import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fonstSizeDefault};
    font-weight: ${(props) => props.theme.fontWeight};
    line-height: ${(props) => props.theme.lineHeight};
    color: ${(props) => props.theme.gray_800};
  }
`
