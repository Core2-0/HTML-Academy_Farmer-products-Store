import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  position: relative;
  display: inline-block;
  padding: 0;
  width: auto;
  min-width: 0;
  background-color: ${(props) => props.theme.white_50};
  color: ${(props) => props.theme.black_900};
  font-size: 18px;
  line-height: 1;
  min-height: 18px;
  padding-top: 21px;
  padding-bottom: 21px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: ${(props) => props.theme.black_900};
    opacity: 0;
    transition: opacity 0.2s ease-out;
    content: "";
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.white_50};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;
