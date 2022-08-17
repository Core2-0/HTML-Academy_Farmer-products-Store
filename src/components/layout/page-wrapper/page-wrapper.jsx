import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledMain } from "./styles";
import { Outlet } from "react-router-dom";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}
