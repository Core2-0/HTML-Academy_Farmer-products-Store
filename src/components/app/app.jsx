import React from "react";
// import featureList from "../../mocks/featureList";
import products from "../../mocks/products";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";

export default function App() {
  return <>
    <GlobalStyle />
    {/* <PageWrapper features={featureList} /> */}
    <PageWrapper products={products} />
  </>;
}
