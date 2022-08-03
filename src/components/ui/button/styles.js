import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  box-sizing: border-box;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.white_50};
  background-color: ${(props) => props.theme.orange_500};
  width: ${(props) => `${props.$minWidth}px` || "100%"};
  padding: 18px 10px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.orange_900};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`