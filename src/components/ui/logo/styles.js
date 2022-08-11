import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Text = styled.span`
  font-family: inherit;
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.theme.gray_800};
  line-height: 1.15;
  margin-left: 24px;
`
