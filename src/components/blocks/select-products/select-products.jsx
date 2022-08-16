import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import { Ul, Li } from "../../styled";
import { CheckboxLabel, StyledArticle, StyledTitle } from "./styles";

function SelectProducts({
  selectValues,
  options,
  name,
  onChange,
  onClickLabel = () => { }
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <StyledArticle>
      <StyledTitle as="h3">Выберете продукты</StyledTitle>
      <Ul>
        {options.map((option, index) => (
          <Li key={option.value}>
            <Checkbox
              labelComponent={CheckboxLabel}
              selectValues={selectValues}
              isChecked={selectValues.includes(option.value)}
              name={name}
              value={option.value}
              text={option.title}
              onClick={(value) => onClickLabel(value, index)}
              onChange={handleChange}
            />
          </Li>
        ))}
      </Ul>
    </StyledArticle>
  );
}

export default SelectProducts;
