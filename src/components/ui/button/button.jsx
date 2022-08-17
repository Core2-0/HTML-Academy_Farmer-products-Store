import React from "react";
import { StyledButton } from "./styles";

function Button({ children, minWidth, link, className, onClick }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
