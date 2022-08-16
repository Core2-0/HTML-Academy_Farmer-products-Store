import styled from "styled-components";
import Price from "../../ui/price/price";
import Title from "../../ui/title/title";

export const StyledArticle = styled.article`
  /* height: 315px; */
  background-color: ${(props) => props.theme.white_50};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
              0px 2px 6px rgba(0, 0, 0, 0.04),
              0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 25px 20px;
`;

export const StyledTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 12px;
  background-color: ${(props) => props.theme.gray_150};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const PriceLabel = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 32px;
`;
