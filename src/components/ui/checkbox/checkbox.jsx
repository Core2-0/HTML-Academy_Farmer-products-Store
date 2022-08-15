import React from "react";
import { VisuallyHiddenInput } from "../../styled"
import styled from "styled-components";

const Label = styled.label`
  display: block;
`

function Checkbox({
  labelComponent,
  selectValue,
  title,
  name,
  value,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        onChange={onChange}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{title}</LabelComponent>
    </Label>
  );
}

export default Checkbox;
