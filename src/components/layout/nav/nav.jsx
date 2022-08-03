import React from "react";
import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/button";
import { StyledNav } from "./styles"

function Nav() {
  return (
    <StyledNav>
      <Logo />
      <Button minWidth={260} link="/order">
        Купить
      </Button>
    </StyledNav>
  );
}

export default Nav;
