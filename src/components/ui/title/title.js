import styled, { css } from "styled-components";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small",
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSize: "44px",
  },
  [TitleSize.MEDIUM]: {
    fontSize: "36px",
  },
  [TitleSize.SMALL]: {
    fontSize: "32px",
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSize: "24px",
  },
}

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 1.15;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
    `;
  }};
`;

export default Title;
