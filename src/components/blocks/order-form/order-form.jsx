import React from "react";
import Button from "../../ui/button/button";
import Price from "../../ui/price/price";
import { PriceLabel, StyledArticle, AddressInput, StyledTitle } from "./styles";

function OrderForm({
  value,
  address,
  onChange,
  onClick,
  disInput,
  isSelectProducts
}) {

  return (
    <StyledArticle>
      <StyledTitle as="h3">Сделать заказ</StyledTitle>
      <AddressInput
        value={address}
        onChange={onChange}
        type="text"
        placeholder="Введите адрес доставки"
        disabled={disInput}
        required
      />
      <PriceLabel>Цена</PriceLabel>
      <Price value={value} />
      <Button
        onClick={onClick}
        minWidth={314}
        type="submit"
        disabled={!(isSelectProducts.length && address)}
      >
        Купить
      </Button>

    </StyledArticle>
  );
}

export default OrderForm;
