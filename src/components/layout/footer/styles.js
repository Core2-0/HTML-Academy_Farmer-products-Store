import styled from "styled-components";

export const StyledFooter = styled.footer`
box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  padding: 18px 90px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
