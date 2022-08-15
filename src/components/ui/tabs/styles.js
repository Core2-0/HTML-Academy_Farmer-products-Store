import styled from "styled-components";
import { P, Dd, Ul } from "../../styled";

export const TitleList = styled(Ul)`
  display: flex;
`;

export const TabButton = styled.button`
  margin-bottom: 16px;
  margin-right: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: ${(props) => (props.active ? props.theme.white_50 : props.theme.gray_900)};
  background-color: ${(props) => (props.active ? props.theme.green_600 : props.theme.gray_150)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabsWrapper = styled.div`
  max-width: 400px;
  max-height: 100%;
`;

export const TabContent = styled.div`
  max-height: 155px;
  overflow-y: auto;
`;

export const TabText = styled(P)`
  max-height: 105px;
  font-size: 14px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  font-weight: 700;
  font-size: 14px;
  background-color: ${(props) => props.theme.blue_50};
  margin: 0;
  padding: 6.5px 12px;
`;

export const Specifications = styled.div`
  font-size: 14px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledDt = styled.dt`
  display: inline;
  font-weight: 700;
  flex-shrink: 0;
`;

export const StyledDd = styled(Dd)`
  display: inline;
`;
