import React, { useEffect } from "react";
import { Close, Wrapper } from "./styles";

function BuyPopup({
  isShow,
  onClose,
  price,
  address,
  selectProducts
}) {
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
      <span>Вы купили: </span>
      <ul>
        {selectProducts.map((product) =>
          <li key={product.id}>{product.title} - {product.price} руб.</li>)}
      </ul>
      <p>Итого: {price} руб.</p>
      <p>Доставка по адресу: {address}</p>
      <Close minWidth={260} onClick={onClose}>Купить ещё</Close>
    </Wrapper>
  ) : null;
}

export default BuyPopup;
