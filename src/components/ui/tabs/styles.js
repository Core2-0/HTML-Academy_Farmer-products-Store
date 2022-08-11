import styled from "styled-components";
import { P } from "../../styled";

export const TitleList = styled.div`
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

export const TabContent = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const TabText = styled(P)`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  background-color: ${(props) => props.theme.blue_50};
  margin: 0;
  padding: 6.5px 12px;
`;
