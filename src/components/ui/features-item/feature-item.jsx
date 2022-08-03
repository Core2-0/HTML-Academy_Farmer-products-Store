import React from "react";
import { StyledFeatureItem, StyledIcon, Mark, CardTitle, CardText } from "./styles";
import { Dl } from "../../styled/"

function FeatureItem({
  mark,
  title,
  text,
  isNegative,
  icon,
}) {
  return (
    <StyledFeatureItem isNegative={isNegative}>
      <StyledIcon src={icon} alt="" width={52} height={52} />
      <Mark isNegative={isNegative}>{mark}</Mark>
      <Dl>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Dl>
    </StyledFeatureItem>
  );
}

export default FeatureItem;
