import React from "react";
import { StyledArticle } from "./styles";

function ProductCard({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>
          <StyledArticle id={product.id}>
            <img src="" alt="" />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <mark>400 руб. / 700 гр.</mark>
          </StyledArticle>
        </li>
      ))}
    </ul>
  );
}

export default ProductCard;
