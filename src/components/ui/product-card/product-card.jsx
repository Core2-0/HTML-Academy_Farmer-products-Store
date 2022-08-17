import React from "react";
import Tabs from "../../ui/tabs/tabs";
import { TitleSize } from "../title/title";
import { StyledArticle, StyledImg, StyledTitle, CardContent } from "./styles";

function ProductCard({ products, tabs }) {

  return (
    <StyledArticle>
      <StyledImg
        src={products.image}
        alt={products.alt}
        width={248}
        height={248}
      />
      <CardContent>
        <StyledTitle as="h3" size={TitleSize.EXTRA_SMALL}>{products.title}</StyledTitle>
        <Tabs products={products} tabs={tabs} />
      </CardContent>
    </StyledArticle>
  );
}

export default ProductCard;
