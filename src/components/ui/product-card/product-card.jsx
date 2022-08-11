import React from "react";
import Tabs from "../../ui/tabs/tabs";
import { TitleSize } from "../title/title";
import { StyledArticle, StyledImg, StyledTitle } from "./styles";

function ProductCard({ products, tabs }) {

  return (
    <StyledArticle>
      <StyledImg
        src={products.image}
        alt={products.alt}
        width={248}
        height={248}
      />
      <StyledTitle as="h3" size={TitleSize.EXTRA_SMALL}>{products.title}</StyledTitle>
      <Tabs tabs={tabs} />
    </StyledArticle>
  );
}

export default ProductCard;
