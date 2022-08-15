import React, { useState } from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import { Ul, Li } from "../../styled";
import { ChecboxLabel, StyledArticle, StyledTitle } from "./styles";

function SelectProducts({ products }) {
  const [selectProduct, setSelectProduct ] = useState(products[0].id);

  return (
      <StyledArticle>
        <StyledTitle as="h3">Выберете продукты</StyledTitle>
        <Ul>
          {products.map((product) => (
            <Li key={product.id}>
              <Checkbox
                labelComponent={ChecboxLabel}
                selectValue={selectProduct}
                value={product.id}
                title={product.title}
                onChange={(el) => {
                  setSelectProduct(Number(el.target.value));
                }}
              />
            </Li>
          ))}
        </Ul>
      </StyledArticle>
  );
}

export default SelectProducts;
