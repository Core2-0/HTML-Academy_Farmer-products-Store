import React from "react";
import { StyledPrice } from "./styles";

const formatPrice = (value) => {
  const roundenPrice = Math.round(value);
  return roundenPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

function Price({ value, classname }) {
  return (
    <StyledPrice className={classname}>{formatPrice(value)} руб.</StyledPrice>
  );
}

export default Price;
