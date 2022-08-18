import React from "react";
import Title, {TitleSize} from "./title";


const Template = (args) => <Title {...args}></Title>;

export default {
  title: "Заголовки (Title)",
}

export const BigTitle = Template.bind({});

BigTitle.args = {
  size: TitleSize.BIG,
  children: "Большой заголовок 44px"
}

export const MediumTitle = Template.bind({});

MediumTitle.args = {
  size: TitleSize.MEDIUM,
  children: "Средний заголовок 36px"
}

export const SmallTitle = Template.bind({});

SmallTitle.args = {
  size: TitleSize.SMALL,
  children: "Маленький заголовок 32px"
}

export const ExtraSmallTitle = Template.bind({});

ExtraSmallTitle.args = {
  size: TitleSize.EXTRA_SMALL,
  children: "Очень маленький заголовок 24px"
}
