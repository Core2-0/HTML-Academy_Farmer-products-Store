import React from "react";
import { TitleSize } from "../title/title";
import { Price, StyledArticle, StyledImg, StyledTitle } from "./styles";

function ProductCard({
  id,
  title,
  image,
  alt,
  price
}) {
  return (
    <StyledArticle id={id}>
      <StyledImg
        src={image}
        alt={alt}
        width={248}
        height={248}
      />
      <StyledTitle as="h3" size={TitleSize.EXTRA_SMALL}>{title}</StyledTitle>
      <Price>{price}</Price>
    </StyledArticle>
  );
}

export default ProductCard;
