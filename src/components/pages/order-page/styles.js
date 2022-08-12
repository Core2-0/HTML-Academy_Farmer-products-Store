import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content 1fr;
  align-items: start;
  column-gap: 20px;
  row-gap: 18px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.gray_150};
  padding-top: 40px;
  padding-right: 90px;
  padding-left: 90px;
  width: ${(props) => props.theme.pageWidth};
`;
