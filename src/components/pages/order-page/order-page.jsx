import React from "react";
import OrderForm from "../../blocks/order-form/order-form";
import SelectProducts from "../../blocks/select-products/select-products";
import ProductsList from "../../blocks/products-list/products-list";
import { StyledSection } from "./styles";

export default function OrderPage({ products }) {
  return (
    <StyledSection>
      <SelectProducts products={products} />
      <OrderForm />
      <ProductsList products={products} />
    </StyledSection>
  );
}
