import React from "react";
import ProductCard from "../../ui/product-card/product-card";
import { Ul, Li } from "../../styled";
import { StyledSection } from "./styles";

function ProductsList({ products }) {
  return (
    <StyledSection>
      <Ul>
      {products.map((product) => (
        <Li key={product}>
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        </Li>
      ))}
    </Ul>
    </StyledSection>
  );
}

export default ProductsList;
