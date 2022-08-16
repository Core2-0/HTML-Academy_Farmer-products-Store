import React, { useState } from "react";
import CheckboxList from "../../ui/checkbox/checkbox-list";
import { CheckboxLabel, StyledArticle, StyledTitle } from "./styles";

function SelectProducts({ products }) {
  const [selectProduct, setSelectProduct ] = useState([]);

  return (
      <StyledArticle>
        <StyledTitle as="h3">Выберете продукты</StyledTitle>
        <CheckboxList
          labelComponent={CheckboxLabel}
          name={"select-products"}
          options={products.map((product) => ({
            value: product.id,
            title: product.title,
          }))}
          selectValues={selectProduct}
          onChange={setSelectProduct}
        />
      </StyledArticle>
  );
}

export default SelectProducts;
