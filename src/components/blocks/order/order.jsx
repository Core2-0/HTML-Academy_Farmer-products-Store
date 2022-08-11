import React from "react";
import OrderForm from "../../ui/order-form/order-form";
import SelectProducts from "../../ui/select-products/select-products";
import { StyledArticle } from "./styles";

export default function Order({ products }) {
  return (
    <StyledArticle>
      <SelectProducts products={products} />
      <OrderForm />
    </StyledArticle>
  );
}
