import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.white_50};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  padding: 17.5px 90px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
