import styled from "styled-components";
import { Section, P } from "../../styled";
import previewImage from "../../../assets/preview_img.svg";
import Title from "../../ui/title/title";

export const StyledSection = styled(Section)`
  position: relative;
  min-height: 600px;
  background-color: ${(props) => props.theme.blue_50};
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    right: 90px;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.blue_100};
  }

  &::after {
    content: "";
    position: absolute;
    right: 177px;
    top: 37px;
    display: block;
    width: 273px;
    height: 563px;
    background-image: url(${previewImage});
    background-repeat: no-repeat;
  }
`

export const TextWrapper = styled.div`
  max-width: 640px;
`

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`

export const Text = styled(P)`
  max-width: 500px;
  box-sizing: border-box;
`
