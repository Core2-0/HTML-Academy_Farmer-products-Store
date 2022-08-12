import styled from "styled-components";
import Title from "../title/title";
import { Img } from "../../styled";

export const StyledArticle = styled.article`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: min-content 1fr;
  justify-items: start;
  box-sizing: border-box;
  padding: 20px;
  width: 727px;
  height: 288px;
  background-color: ${(props) => props.theme.white_50};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledImg = styled(Img)`
  grid-row: 1 / -1;
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  background-color: ${(props) => props.theme.blue_50};
  margin: 0;
  padding: 4px 8px;
`;
