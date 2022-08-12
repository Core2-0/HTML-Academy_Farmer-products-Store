import React from "react";
import Button from "../../ui/button/button";
import { StyledArticle } from "./styles";

function OrderForm() {
  return (
    <StyledArticle>
      <h3>Сделать заказ</h3>
      <input type="text" placeholder="Введите адрес доставки" />
      <p>Цена</p>
      <p>1 200 руб.</p>
      <Button minWidth={314} type="button">Купить</Button>
    </StyledArticle>
  );
}

export default OrderForm;
