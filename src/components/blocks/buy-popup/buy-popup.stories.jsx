import React from "react";
import BuyPopup from "./buy-popup";
import products from "../../../mocks/products";

const Template = (args) => <BuyPopup {...args} />;

export default {
  title: "Попап заказа (BuyPopup)",
}

export const Popup = Template.bind({});

Popup.args = {
  isShow: true,
  onClose: false,
  price: "123456789",
  address: "qwerty",
  selectProducts: products,
}
