import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.gray_150};
  padding-top: 40px;
  padding-right: 90px;
  padding-left: 90px;
  width: ${(props) => props.theme.pageWidth};
  height: 100%;
`;
