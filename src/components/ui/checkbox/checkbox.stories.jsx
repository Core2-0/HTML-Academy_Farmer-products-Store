import React, { useState } from "react";
import Checkbox from "./checkbox";
import { CheckboxLabel } from "../../blocks/select-products/styles";

export default {
  title: "Чекбокс (Checkbox)",
  component: Checkbox
}

const Template = (args) => {
  const [value, setValue] = useState([]);
  const [checked, setChecked] = useState(true);

  return <Checkbox {...args} value={value} isChecked={checked} onChange={() => setChecked(!checked)}  onClick={setValue} />;
}

export const TemplateCheckbox = Template.bind({})

TemplateCheckbox.args ={
  labelComponent: CheckboxLabel,
  text: "Checkbox",
  name: "select-products",
}
