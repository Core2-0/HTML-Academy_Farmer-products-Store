import React from "react";
import { VisuallyHiddenInput } from "../../styled"
import styled from "styled-components";

const Label = styled.label`
  display: block;
`

function Checkbox({
  labelComponent,
  selectValue,
  name,
  value,
  title,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <input value={value} type="checkbox"/>
      {title}
    </Label>
  );
}

export default Checkbox;
