import React from "react";
import OrderForm from "../../ui/order-form/order-form";
import SelectProducts from "../../ui/select-products/select-products";
import { StyledSection } from "./styles";

export default function Order({ products }) {
  return (
    <StyledSection>
      <SelectProducts products={products} />
      <OrderForm />
    </StyledSection>
  );
}
