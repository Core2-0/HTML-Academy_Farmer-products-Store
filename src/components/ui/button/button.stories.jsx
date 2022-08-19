import React from "react";
import Button from "./button";

const Template = (args) => <Button {...args} />;

export default {
  title: "Кнопка (Button)",
}

export const ExampleButton = Template.bind({});

ExampleButton.args = {
  children: "Button",
  minWidth: 265,
}
