import React from "react";
import featureList from "../../mocks/featureList";
import products from "../../mocks/products";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../app-route";
import MainPage from "../pages/main-page/main-page";
import OrderPage from "../pages/order-page/order-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={featureList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={products} />}
            />
            <Route path="*" element={<h1>404. Страница не существует.</h1>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
