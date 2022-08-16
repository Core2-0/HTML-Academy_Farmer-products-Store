import React from "react";
import { Label, VisuallyHiddenInput } from "../../styled"

function Checkbox({
  onClick,
  labelComponent,
  isChecked,
  name,
  value,
  text,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
