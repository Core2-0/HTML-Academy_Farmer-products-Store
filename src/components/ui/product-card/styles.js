import styled from "styled-components";
import Title from "../title/title";
import { Img } from "../../styled";

export const StyledArticle = styled.article`
  box-sizing: border-box;
  padding: 20px;
  width: 727px;
  height: 288px;
  background-color: ${(props) => props.theme.white_50};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledImg = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
  object-fit: cover;
  float: left;
`;

export const CardContent = styled.div`
  position: relative;
  height: 248px;
  width: 400px;
  float: right;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;
