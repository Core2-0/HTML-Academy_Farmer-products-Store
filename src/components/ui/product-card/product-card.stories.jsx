import React from "react";
import ProductCard from "./product-card";
import products from '../../../mocks/products';
import Tabs from "../../ui/tabs/tabs";


const Template = (args) => <ProductCard {...args}><Tabs /></ProductCard>;

export default {
  title: "Карточка товара (ProductCard)",
}

export const Card = Template.bind({});

Card.args = {
  products: products[0],
  tabs: products[0].tabs
}
