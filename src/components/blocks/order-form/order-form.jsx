import React from "react";
import Button from "../../ui/button/button";
import Price from "../../ui/price/price";
import { PriceLabel, StyledArticle, StyledInput, StyledTitle } from "./styles";

function OrderForm({ value }) {
  return (
    <StyledArticle>
      <StyledTitle as="h3">Сделать заказ</StyledTitle>
      <StyledInput type="text" placeholder="Введите адрес доставки" />
      <PriceLabel>Цена</PriceLabel>
      <Price value={value} />
      <Button minWidth={314} type="submit">Купить</Button>
    </StyledArticle>
  );
}

export default OrderForm;
