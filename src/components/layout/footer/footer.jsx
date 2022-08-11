import React from "react";
import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright />
    </StyledFooter>
  );
}

export default Footer;
