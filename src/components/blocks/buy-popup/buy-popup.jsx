import React, { useEffect } from "react";
import { Wrapper } from "./styles";

export default function BuyPopup({ isShow, onClose, price, address, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  });

  return isShow ? (
    <Wrapper>
      <h2>Спасибо за заказ!</h2>
      <p>Вы купили: </p>
      <p>{price} руб.</p>
      <p>Доставка по адресу: {address}</p>
      <button onClick={onClose}>Купить ещё</button>
      {children}
    </Wrapper>
  ) : null;
}
