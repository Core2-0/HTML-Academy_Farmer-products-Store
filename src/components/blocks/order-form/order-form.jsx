import React, { useState } from "react";
import Button from "../../ui/button/button";
import Price from "../../ui/price/price";
import BuyPopup from "../buy-popup/buy-popup";
import { PriceLabel, StyledArticle, AddressInput, StyledTitle } from "./styles";

function OrderForm({ value }) {
  const [address, setAddress] = useState("");
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <StyledArticle>
      <StyledTitle as="h3">Сделать заказ</StyledTitle>
      <AddressInput
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Введите адрес доставки"
      />
      <PriceLabel>Цена</PriceLabel>
      <Price value={value} />
      <Button
        onClick={() => setIsShowPopup(true)}
        minWidth={314}
        type="submit"
      >
        Купить
      </Button>
      <BuyPopup
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        price={value}
        address={address}
      />
    </StyledArticle>
  );
}

export default OrderForm;
