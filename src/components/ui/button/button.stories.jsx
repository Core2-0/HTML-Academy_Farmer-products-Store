import React from "react";
import Button from "./button";

const Template = (args) => <Button {...args} />;

export default {
  title: "Кнопка (Button)",
}

export const ExampleButton = Template.bind({});

ExampleButton.args = {
  children: "Test",
  minWidth: 265,
}
