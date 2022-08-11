import React from "react";
import { TitleSize } from "../../ui/title/title";
import { StyledSection, TextWrapper, StyledTitle, Text } from "./styles";

function Preview() {
  return (
    <StyledSection>
      <TextWrapper>
        <StyledTitle size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </StyledTitle>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default Preview;
