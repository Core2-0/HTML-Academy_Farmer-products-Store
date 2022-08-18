import React from "react";
import FeatureItem from "./feature-item";
import featureList from "../../../mocks/featureList";

const Template = (args) => <FeatureItem {...args} />

export default {
  title: "Карточка преимуществ (FeatureItem)"
}

export const FeatureCard = Template.bind({});

FeatureCard.args = {
  mark: featureList[0].mark,
  title: featureList[0].title,
  text: featureList[0].text,
  isNegative: false,
  icon: featureList[0].icon
}
