import React from "react";
import products from '../../../mocks/products';
import Tabs from "../../ui/tabs/tabs";


const Template = (args) => <Tabs {...args} />;

export default {
  title: "Табы (Tabs)",
}

export const Tab = Template.bind({});

Tab.args = {
  products: products[0],
  tabs: products[0].tabs
}
