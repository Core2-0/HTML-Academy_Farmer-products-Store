import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
// import MainPage from "../../pages/main-page/main-page";
import OrderPage from "../../pages/order-page/order-page";
import { StyledMain } from "./styles";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <StyledMain>
        {/* <MainPage {...prop} /> */}
        <OrderPage {...prop} />
      </StyledMain>
      <Footer />
    </>
  );
}
