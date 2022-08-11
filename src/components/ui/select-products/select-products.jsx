import React from "react";
import { StyledSection } from "./styles";
import Checkbox from "../checkbox/checkbox";

function SelectProducts({ products }) {
  return (
      <StyledSection>
        <h3>Выберете продукты</h3>
        <ul>
          {products.map((product) => (
            <li key={product}>
              <Checkbox
                value={product.id}
                title={product.title}
              />
            </li>
          ))}
        </ul>
      </StyledSection>
  );
}

export default SelectProducts;
