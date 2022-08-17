import React from "react";
import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/button";
import { StyledNav } from "./styles"
import { AppRoute } from "../../../app-route";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
    <Button minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
    </Button>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
    <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
    </Button>
    )
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      <Logo />
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </StyledNav>
  );
}

export default Nav;
