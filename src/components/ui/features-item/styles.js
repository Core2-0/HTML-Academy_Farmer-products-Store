import styled from "styled-components";
import { Img, Dd } from "../../styled/"

export const StyledFeatureItem = styled.article`
  width: 540px;
  min-height: 197px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? props.theme.red_50 : props.theme.green_100)};
`;

export const StyledIcon = styled(Img)`
  float: left;
  width: 52px;
  height: 52px;
  margin-right: 20px;
  margin-top: 2px;
`

export const Mark = styled.span`
  display: inline-block;
  font-size: 14px;
  color: ${(props) => props.theme.white_50};
  background-color: ${(props) => (props.isNegative ? props.theme.red_600 : props.theme.green_600)};
  padding: 2px 10px;
  margin-bottom: 2px;
`;

export const CardTitle = styled.dt`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const CardText = styled(Dd)`
  clear: both;
  max-width: 460px;
`
