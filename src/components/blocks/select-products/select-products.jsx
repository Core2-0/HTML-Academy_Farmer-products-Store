import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import { Ul, Li } from "../../styled";
import { StyledArticle, StyledTitle } from "./styles";

function SelectProducts({ products }) {
  return (
      <StyledArticle>
        <StyledTitle as="h3">Выберете продукты</StyledTitle>
        <Ul>
          {products.map((product) => (
            <Li key={product}>
              <Checkbox
                value={product.id}
                title={product.title}
              />
            </Li>
          ))}
        </Ul>
      </StyledArticle>
  );
}

export default SelectProducts;
