import React from "react";
import Order from "../../blocks/order/order";

export default function OrderPage({ products }) {
  return (
    <>
      <Order products={products} />
    </>
  );
}
