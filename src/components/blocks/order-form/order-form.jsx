import React from "react";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/title";
import { PriceLabel, StyledArticle, StyledInput, StyledTitle, SumPrice } from "./styles";

function OrderForm() {
  return (
    <StyledArticle>
      <StyledTitle as="h3">Сделать заказ</StyledTitle>
      <StyledInput type="text" placeholder="Введите адрес доставки" />
      <PriceLabel>Цена</PriceLabel>
      <SumPrice as="h4" size={TitleSize.EXTRA_SMALL}>1 200 руб.</SumPrice>
      <Button minWidth={314} type="submit">Купить</Button>
    </StyledArticle>
  );
}

export default OrderForm;
