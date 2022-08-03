import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import { StyledLogo, Text } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage></LogoImage>
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
