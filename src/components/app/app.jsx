import React from "react";
import featureList from "../../mocks/featureList";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";

export default function App() {
  return <>
    <GlobalStyle />
    <PageWrapper features={featureList} />
  </>;
}
