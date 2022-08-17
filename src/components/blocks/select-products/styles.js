import styled, { css } from "styled-components";
import Title from "../../ui/title/title";
import CheckIcon from "../../../assets/check_icon.svg";

export const StyledArticle = styled.article`
  background-color: ${(props) => props.theme.white_50};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
              0px 2px 6px rgba(0, 0, 0, 0.04),
              0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 25px 20px;
`;

export const StyledTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${CheckIcon});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
