import styled from "styled-components";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

export const Wrapper = styled.div`
  min-width: 500px;
  padding: 60px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
box-shadow: 0px 10px 20px rgba(0,0,0,0.04),
            0px 2px 6px rgba(0,0,0,0.04),
            0px 0px 1px rgba(0,0,0,0.04);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const PopupTitle = styled(Title)`
  text-align: center;
  margin-bottom: 30px;
`;

export const Close = styled(Button)`
  text-align: center;
`;
