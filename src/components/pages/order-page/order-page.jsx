import React from "react";
import Order from "../../blocks/order/order";
import ProductsList from "../../blocks/products-list/products-list";
import { StyledSection } from "./styles";

export default function OrderPage({ products }) {
  return (
    <StyledSection>
      <Order products={products} />
      <ProductsList products={products} />
    </StyledSection>
  );
}
