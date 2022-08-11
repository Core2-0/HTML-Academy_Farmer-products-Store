import React from "react";
import Button from "../button/button";
import { StyledSection } from "./styles";

function OrderForm() {
  return (
    <StyledSection>
      <h3>Сделать заказ</h3>
      <input type="text" placeholder="Введите адрес доставки" />
      <p>Цена</p>
      <p>1 200 руб.</p>
      <Button minWidth={314} type="button">Купить</Button>
    </StyledSection>
  );
}

export default OrderForm;
